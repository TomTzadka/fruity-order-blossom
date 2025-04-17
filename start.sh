#!/bin/bash

echo "🐳 Docker Containers Down..."
sudo docker compose down -v

echo "🐳 Building Docker Containers..."
docker compose build

echo "🚀 Starting Docker Compose..."
docker compose up
