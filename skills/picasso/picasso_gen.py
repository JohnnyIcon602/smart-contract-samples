#!/usr/bin/env python3
"""
Picasso Image Generator Helper
Generates t-shirt designs with real text overlay
"""

import requests
import urllib.request
import sys
import os
from PIL import Image, ImageDraw, ImageFont

# Config
API_TOKEN = 'r8_JUwDd65YeG2QPALlN1A0CnDnUhGe3T41fYzDZ'
VERSION_ID = 'c846a69991daf4c0e5d016514849d14ee5b2e6846ce6b9d6f21369e564cfe51e'
OUTPUT_DIR = '/Users/five/.openclaw/workspace/designs'

def generate_design(topic, text, graphic_prompt, output_name):
    """Generate a t-shirt design with graphic + real text overlay"""
    
    print(f"Generating: {topic} - {text}")
    
    # Step 1: Generate graphic (no text in prompt)
    response = requests.post(
        'https://api.replicate.com/v1/predictions',
        headers={
            'Authorization': f'Token {API_TOKEN}',
            'Content-Type': 'application/json'
        },
        json={
            'version': VERSION_ID,
            'input': {'prompt': graphic_prompt}
        }
    )
    
    data = response.json()
    pred_id = data.get('id')
    print(f"  Prediction ID: {pred_id}")
    
    # Poll for result
    for i in range(30):
        import time
        time.sleep(2)
        resp = requests.get(
            f'https://api.replicate.com/v1/predictions/{pred_id}',
            headers={'Authorization': f'Token {API_TOKEN}'}
        )
        status = resp.json()
        if status.get('status') == 'succeeded':
            url = status.get('output', [None])[0]
            print(f"  Downloading graphic...")
            urllib.request.urlretrieve(url, '/tmp/graphic.webp')
            break
        elif status.get('status') == 'failed':
            print(f"  Error: {status.get('error')}")
            return None
    
    # Step 2: Add text overlay
    print(f"  Adding text overlay: {text}")
    img = Image.open('/tmp/graphic.webp').convert('RGB')
    img = img.resize((2000, 2000))
    
    draw = ImageDraw.Draw(img)
    
    # Use bold font
    try:
        font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 280)
    except:
        font = ImageFont.load_default()
    
    # Center text at bottom
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    x = (img.width - text_width) // 2
    y = img.height - text_height - 150
    
    # Black background for text
    draw.rectangle([x-30, y-30, x+text_width+30, y+text_height+30], fill='black')
    # White text
    draw.text((x, y), text, fill='white', font=font)
    
    # Save
    output_path = os.path.join(OUTPUT_DIR, f'{output_name}.png')
    img.save(output_path)
    print(f"  Saved: {output_path}")
    
    return output_path


if __name__ == '__main__':
    if len(sys.argv) < 4:
        print("Usage: python picasso_gen.py <topic> <text> <graphic_prompt> [output_name]")
        print("Example: python picasso_gen.py 'weaklings' 'WEAKLINGS' 'bold edgy skull graphic white background'")
        sys.exit(1)
    
    topic = sys.argv[1]
    text = sys.argv[2]
    prompt = sys.argv[3]
    output = sys.argv[4] if len(sys.argv) > 4 else f"{topic}-design"
    
    generate_design(topic, text, prompt, output)
