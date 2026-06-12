#!/usr/bin/env python3
"""Generate video via Kling Video 3.0 on Replicate (with audio!)"""

import requests
import urllib.request
import os
import sys
import time

API_TOKEN = 'r8_JUwDd65YeG2QPALlN1A0CnDnUhGe3T41fYzDZ'
VERSION_ID = '4a8ba2743bd9dc2b487e0c4319988aacd658d33c2d064b8a420f4ee1732c30bd'

def generate_video(prompt, output_path, duration=10, with_audio=True):
    """Generate video from text prompt using Kling Video 3.0"""
    
    print(f"Generating video: {prompt[:60]}...")
    print(f"  Audio: {'enabled' if with_audio else 'disabled'}")
    
    response = requests.post(
        'https://api.replicate.com/v1/predictions',
        headers={
            'Authorization': f'Token {API_TOKEN}',
            'Content-Type': 'application/json'
        },
        json={
            'version': VERSION_ID,
            'input': {
                'prompt': prompt,
                'duration': duration,
                'aspect_ratio': '9:16',
                'generate_audio': with_audio  # THIS IS THE KEY!
            }
        }
    )
    
    data = response.json()
    pred_id = data.get('id')
    print(f"  Prediction ID: {pred_id}")
    
    if not pred_id:
        print(f"  Error: {data}")
        return None
    
    max_checks = 200  # ~10 minutes of polling at 3s intervals (Kling runs can take 6-7 min)
    for i in range(max_checks):
        time.sleep(3)
        resp = requests.get(
            f'https://api.replicate.com/v1/predictions/{pred_id}',
            headers={'Authorization': f'Token {API_TOKEN}'}
        )
        status = resp.json()
        state = status.get('status')
        print(f"  Status: {state}")
        
        if state == 'succeeded':
            output = status.get('output')
            if isinstance(output, dict):
                video_url = output.get('video') or output.get('url') or list(output.values())[0]
            elif isinstance(output, list):
                video_url = output[0]
            else:
                video_url = output
                
            print(f"  Downloading...")
            urllib.request.urlretrieve(video_url, output_path)
            print(f"  Saved: {output_path}")
            return output_path
            
        elif state == 'failed':
            print(f"  Error: {status.get('error')}")
            return None
    
    print("  Timeout")
    return None


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: python generate_video.py <prompt> <output.mp4> [duration] [audio]")
        sys.exit(1)
    
    prompt = sys.argv[1]
    output = sys.argv[2]
    duration = int(sys.argv[3]) if len(sys.argv) > 3 else 10
    audio = sys.argv[4].lower() != 'false' if len(sys.argv) > 4 else True
    
    generate_video(prompt, output, duration, audio)
