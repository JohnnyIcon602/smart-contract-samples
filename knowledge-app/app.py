#!/usr/bin/env python3
"""
Skool Money Language Academy - Advanced Version
Answers questions based on your transcripts using RAG
"""

from flask import Flask, request, jsonify, render_template_string
import os
import json
import hashlib
from datetime import datetime

app = Flask(__name__)

# Config
KNOWLEDGE_DIR = os.path.dirname(os.path.abspath(__file__)) + "/source"
INDEX_FILE = os.path.dirname(os.path.abspath(__file__)) + "/index/knowledge.json"

# Simple in-memory vector store (for production, use Chroma/FAISS)
knowledge_store = []

def load_knowledge():
    """Load all transcripts into memory"""
    global knowledge_store
    knowledge_store = []
    
    if not os.path.exists(KNOWLEDGE_DIR):
        os.makedirs(KNOWLEDGE_DIR)
        return
    
    for filename in os.listdir(KNOWLEDGE_DIR):
        if filename.endswith('.txt'):
            filepath = os.path.join(KNOWLEDGE_DIR, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                knowledge_store.append({
                    'source': filename,
                    'content': content,
                    'hash': hashlib.md5(content.encode()).hexdigest()
                })
    
    save_index()

def save_index():
    """Save the knowledge index"""
    os.makedirs(os.path.dirname(INDEX_FILE), exist_ok=True)
    with open(INDEX_FILE, 'w') as f:
        json.dump(knowledge_store, f)

def load_index():
    """Load existing index"""
    global knowledge_store
    if os.path.exists(INDEX_FILE):
        with open(INDEX_FILE, 'r') as f:
            knowledge_store = json.load(f)
    else:
        load_knowledge()

def find_relevant_context(query, top_k=3):
    """Simple keyword-based search (upgrade to embeddings for better results)"""
    query_lower = query.lower()
    results = []
    
    # Extract key terms from query
    key_terms = [w for w in query_lower.split() if len(w) > 3]
    
    for doc in knowledge_store:
        content = doc['content']
        content_lower = content.lower()
        
        # Score based on key term matches
        score = sum(1 for term in key_terms if term in content_lower)
        
        if score > 0:
            # Find relevant paragraph (not just line)
            lines = content.split('\n')
            relevant_lines = []
            for line in lines:
                line = line.strip()
                if line and len(line) > 20 and any(term in line.lower() for term in key_terms):
                    relevant_lines.append(line)
            
            if relevant_lines:
                # Combine into a cleaner snippet (limit length)
                snippet = ' '.join(relevant_lines[:2])
                if len(snippet) > 400:
                    snippet = snippet[:400] + "..."
                
                results.append({
                    'source': doc['source'],
                    'score': score,
                    'snippet': snippet
                })
    
    # Sort by score and return top-k
    results.sort(key=lambda x: x['score'], reverse=True)
    return results[:top_k]

def generate_answer(query, context):
    """Generate concise answer using GPT based on context"""
    if not context:
        return "I don't have enough information to answer that question. Try asking something about the training content."
    
    # Combine relevant snippets
    context_text = "\n\n".join([ctx['snippet'][:500] for ctx in context])
    
    prompt = f"""You are a helpful assistant for the Money Language Academy community. 
Answer the user's question based ONLY on the context provided below. 

Rules:
- Keep your answer concise (2-4 sentences max)
- Don't mention sources or filenames
- Don't say "based on the context" or "according to"
- Just give the direct answer in a helpful, friendly tone

Context:
{context_text}

Question: {query}

Answer:"""

    try:
        import openai
        openai.api_key = "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"
        
        response = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=300,
            temperature=0.7
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        # Log the error for debugging
        print(f"OpenAI API error: {e}")
        # Fallback: extract first 2-3 sentences from most relevant snippet
        snippet = context[0]['snippet'] if context else ""
        # Try to extract complete sentences
        import re
        sentences = re.split(r'(?<=[.!?])\s+', snippet)
        concise = ' '.join(sentences[:2]) if sentences else snippet[:150]
        if len(concise) < 50:
            concise = snippet[:150]
        return concise + " (Note: This is an automated summary. For better answers, check if the AI service is working.)"

# HTML Template
HTML_TEMPLATE = '''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>💬 Money Language Academy</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        h1 {
            color: #fff;
            text-align: center;
            margin-bottom: 10px;
            font-size: 28px;
        }
        .subtitle {
            color: #888;
            text-align: center;
            margin-bottom: 20px;
            font-size: 14px;
        }
        .chat-container {
            background: #0f0f1a;
            border-radius: 16px;
            padding: 20px;
            min-height: 500px;
            display: flex;
            flex-direction: column;
        }
        .messages {
            flex: 1;
            overflow-y: auto;
            margin-bottom: 20px;
            padding-right: 10px;
        }
        .message {
            margin-bottom: 15px;
            padding: 12px 16px;
            border-radius: 12px;
            max-width: 85%;
            line-height: 1.5;
        }
        .message.user {
            background: #2563eb;
            color: #fff;
            margin-left: auto;
        }
        .message.bot {
            background: #1e293b;
            color: #e2e8f0;
        }
        .message .source {
            font-size: 11px;
            color: #64748b;
            margin-top: 8px;
        }
        .input-area {
            display: flex;
            gap: 10px;
        }
        input {
            flex: 1;
            padding: 14px 20px;
            border: 1px solid #334155;
            border-radius: 12px;
            background: #1e293b;
            color: #fff;
            font-size: 16px;
        }
        input:focus {
            outline: none;
            border-color: #2563eb;
        }
        button {
            padding: 14px 28px;
            background: #2563eb;
            color: #fff;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            cursor: pointer;
            font-weight: 600;
        }
        button:hover { background: #1d4ed8; }
        button:disabled { background: #475569; cursor: not-allowed; }
        .stats {
            text-align: center;
            color: #64748b;
            font-size: 12px;
            margin-top: 15px;
        }
        .typing {
            color: #64748b;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>💬 Skool Community Q&A</h1>
        <p class="subtitle">Ask me anything about the training content</p>
        
        <div class="chat-container">
            <div class="messages" id="messages">
                <div class="message bot">
                    Hi! I'm your community assistant. Ask me anything about the training materials and I'll answer based on the transcripts.
                </div>
            </div>
            
            <div class="input-area">
                <input type="text" id="question" placeholder="Ask a question..." onkeypress="handleKey(event)">
                <button onclick="ask()" id="sendBtn">Send</button>
            </div>
        </div>
        
        <div class="stats" id="stats">Knowledge base: 0 documents loaded</div>
    </div>

    <script>
        function handleKey(e) {
            if (e.key === 'Enter') ask();
        }
        
        async function ask() {
            const input = document.getElementById('question');
            const question = input.value.trim();
            if (!question) return;
            
            // Add user message
            addMessage(question, 'user');
            input.value = '';
            
            // Show typing
            const typingMsg = addMessage('Thinking...', 'bot');
            typingMsg.classList.add('typing');
            
            try {
                const response = await fetch('/api/ask', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({question})
                });
                
                const data = await response.json();
                
                // Remove typing
                typingMsg.remove();
                
                // Add answer
                addMessage(data.answer, 'bot');
                
            } catch (err) {
                typingMsg.remove();
                addMessage('Sorry, something went wrong. Try again.', 'bot');
            }
        }
        
        function addMessage(text, type) {
            const div = document.createElement('div');
            div.className = 'message ' + type;
            div.textContent = text;
            document.getElementById('messages').appendChild(div);
            document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
            return div;
        }
        
        // Load stats
        fetch('/api/stats').then(r => r.json()).then(d => {
            document.getElementById('stats').textContent = 'Knowledge base: ' + d.documents + ' documents loaded';
        });
    </script>
</body>
</html>
'''

@app.route('/')
def index():
    return render_template_string(HTML_TEMPLATE)

@app.route('/api/ask', methods=['POST'])
def ask():
    data = request.json
    query = data.get('question', '')
    
    # Find relevant context
    context = find_relevant_context(query)
    
    # Generate answer
    answer = generate_answer(query, context)
    
    return jsonify({'answer': answer, 'sources': [c['source'] for c in context]})

@app.route('/api/stats')
def stats():
    return jsonify({'documents': len(knowledge_store)})

@app.route('/api/add', methods=['POST'])
def add_document():
    """API to add new transcript"""
    data = request.json
    content = data.get('content', '')
    source = data.get('source', 'document.txt')
    
    filepath = os.path.join(KNOWLEDGE_DIR, source)
    with open(filepath, 'w') as f:
        f.write(content)
    
    # Reload knowledge
    load_knowledge()
    
    return jsonify({'success': True, 'documents': len(knowledge_store)})

if __name__ == '__main__':
    import sys
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5005
    load_index()
    print(f"📚 Loaded {len(knowledge_store)} documents")
    print(f"🚀 Skool Q&A Bot running on http://localhost:{port}")
    app.run(host='0.0.0.0', port=port, debug=True)