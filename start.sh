#!/bin/bash

echo "🐳 Building Docker Containers..."
docker.compose build

echo "🚀 Starting Docker Compose..."
docker.compose up
