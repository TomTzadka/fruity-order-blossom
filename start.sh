#!/bin/bash
echo "🐳 Start..."

echo "🐳 Docker Containers Down..."
sudo docker compose down -v

echo "🐳 Building Docker Containers..."
sudo docker compose build

echo "🚀 Starting Docker Compose..."
sudo docker compose up
