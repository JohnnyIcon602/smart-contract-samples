#!/usr/bin/env python3
"""
Simple HTTP server for Mission Control with task persistence.
Serves static files from this directory and handles task CRUD via API.
"""
import json
import os
from http.server import HTTPServer, SimpleHTTPRequestHandler
from datetime import datetime

TASKS_FILE = '/Users/five/.openclaw/workspace/mission-control/tasks.json'

class MissionControlHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        # Handle API calls
        if self.path == '/api/tasks':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            try:
                with open(TASKS_FILE, 'r') as f:
                    self.wfile.write(f.read().encode())
            except FileNotFoundError:
                self.wfile.write(b'{"tasks": []}')
            return
        
        # Serve static files
        return SimpleHTTPRequestHandler.do_GET(self)
    
    def do_POST(self):
        if self.path == '/api/tasks':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            
            try:
                data = json.loads(body)
                
                # Update tasks.json
                with open(TASKS_FILE, 'w') as f:
                    json.dump({
                        'tasks': data.get('tasks', []),
                        'lastUpdated': datetime.now().isoformat()
                    }, f, indent=2)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(b'{"status": "ok"}')
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode())
            return
        
        self.send_response(404)
        self.end_headers()
    
    def log_message(self, format, *args):
        print(f"[Mission Control] {args[0]}")

def run(port=8765):
    server = HTTPServer(('0.0.0.0', port), MissionControlHandler)
    print(f"🎯 Mission Control server running at http://localhost:{port}")
    print(f"   API endpoints:")
    print(f"   GET  /api/tasks   - get tasks")
    print(f"   POST /api/tasks   - save tasks (JSON body)")
    server.serve_forever()

if __name__ == '__main__':
    run()
