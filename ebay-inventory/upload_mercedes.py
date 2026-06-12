#!/usr/bin/env python3
"""
eBay Image Uploader - uploads Mercedes part images to Imgur
Tracks uploaded images to avoid duplicates
"""
import requests
import os
import sys
import json

CLIENT_ID = "546c25a59c58ad7"
BASE_DIR = "/Users/five/Downloads/Mercedes "
TRACKING_FILE = os.path.expanduser("~/.openclaw/workspace/ebay-inventory/uploaded_images.json")

def load_uploaded():
    """Load list of already uploaded images"""
    if os.path.exists(TRACKING_FILE):
        with open(TRACKING_FILE, 'r') as f:
            return set(json.load(f))
    return set()

def save_uploaded(uploaded_set):
    """Save uploaded images list"""
    with open(TRACKING_FILE, 'w') as f:
        json.dump(list(uploaded_set), f)

def upload_to_imgur(image_path):
    """Upload single image to Imgur"""
    headers = {"Authorization": f"Client-ID {CLIENT_ID}"}
    url = "https://api.imgur.com/3/image"
    
    try:
        with open(image_path, "rb") as f:
            response = requests.post(url, headers=headers, files={"image": f})
        
        if response.status_code == 200:
            return response.json()["data"]["link"]
        else:
            print(f"Error {response.status_code}: {response.text[:100]}")
            return None
    except Exception as e:
        print(f"Error: {e}")
        return None

def main():
    uploaded = load_uploaded()
    image_extensions = (".jpg", ".jpeg", ".png", ".gif", ".webp")
    
    new_uploads = 0
    
    # Loop through all part folders
    for part_folder in sorted(os.listdir(BASE_DIR)):
        folder_path = os.path.join(BASE_DIR, part_folder)
        if not os.path.isdir(folder_path):
            continue
            
        for filename in sorted(os.listdir(folder_path)):
            if not filename.lower().endswith(image_extensions):
                continue
                
            image_key = f"{part_folder}/{filename}"
            
            # Skip if already uploaded
            if image_key in uploaded:
                continue
            
            filepath = os.path.join(folder_path, filename)
            print(f"Uploading {image_key}...")
            
            img_url = upload_to_imgur(filepath)
            if img_url:
                uploaded.add(image_key)
                new_uploads += 1
                print(f"  → {img_url}")
                
                # Save progress after each upload
                save_uploaded(uploaded)
    
    print(f"\n=== Summary ===")
    print(f"New images uploaded: {new_uploads}")
    print(f"Total uploaded: {len(uploaded)}")

if __name__ == "__main__":
    main()
