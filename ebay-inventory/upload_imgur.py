#!/usr/bin/env python3
"""
Imgur anonymous uploader - requires client ID
"""
import requests
import os
import sys

# Get client ID - for full account uploads, user needs to register an app
# For now, let's try anonymous upload with a test client ID
CLIENT_ID = "546c25a59c58ad7"  # Sample anonymous test ID

def upload_to_imgur(image_path, client_id=CLIENT_ID):
    """Upload image to Imgur anonymously"""
    headers = {"Authorization": f"Client-ID {client_id}"}
    url = "https://api.imgur.com/3/image"
    
    try:
        with open(image_path, "rb") as f:
            response = requests.post(url, headers=headers, files={"image": f})
        
        if response.status_code == 200:
            return response.json()["data"]["link"]
        else:
            print(f"Error: {response.status_code} - {response.text}")
            return None
    except Exception as e:
        print(f"Error uploading {image_path}: {e}")
        return None

def upload_folder(folder_path, client_id=CLIENT_ID):
    """Upload all images in a folder"""
    image_extensions = (".jpg", ".jpeg", ".png", ".gif", ".webp")
    folder_name = os.path.basename(folder_path)
    
    urls = []
    
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(image_extensions):
            filepath = os.path.join(folder_path, filename)
            print(f"Uploading {filename}...")
            url = upload_to_imgur(filepath, client_id)
            if url:
                urls.append(url)
                print(f"  → {url}")
    
    return urls

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python upload_imgur.py <folder_path> [client_id]")
        sys.exit(1)
    
    folder = sys.argv[1]
    client_id = sys.argv[2] if len(sys.argv) > 2 else CLIENT_ID
    
    print(f"Uploading images from: {folder}")
    print(f"Using Client ID: {client_id}")
    print("-" * 50)
    
    urls = upload_folder(folder, client_id)
    
    print("-" * 50)
    print(f"Uploaded {len(urls)} images")
    for url in urls:
        print(url)
