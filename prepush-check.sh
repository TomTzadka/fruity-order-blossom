#!/bin/bash

echo "🔍 Running pre-push checklist..."

# 1. Check if Docker containers are running
echo "🧱 Checking Docker containers..."
if ! docker compose ps | grep "Up" > /dev/null; then
  echo "❌ Docker containers are not running. Run: docker compose up -d --build"
  exit 1
else
  echo "✅ Docker containers are running."
fi

# 2. Check for uncommitted changes
echo "📄 Checking Git status..."
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "⚠️ You have uncommitted changes. Run: git status"
else
  echo "✅ Working tree is clean."
fi

# 3. Check for sensitive keys accidentally added
echo "🔐 Scanning for sensitive keys..."
if git diff --cached | grep -E 'KEY|SECRET|TOKEN|PASSWORD' > /dev/null; then
  echo "❌ Potential secrets found in staged files! Please review."
  git diff --cached | grep -E 'KEY|SECRET|TOKEN|PASSWORD'
  exit 1
else
  echo "✅ No secrets found in staged files."
fi

# 4. Check if README.md exists
echo "📘 Checking README.md..."
if [ ! -f README.md ]; then
  echo "❌ README.md is missing!"
  exit 1
else
  echo "✅ README.md is present."
fi

# 5. Optional: Run frontend build
if [ -f client/package.json ]; then
  echo "🚧 Building frontend to validate..."
  cd client && yarn build > /dev/null
  if [ $? -ne 0 ]; then
    echo "❌ Frontend build failed!"
    exit 1
  else
    echo "✅ Frontend builds successfully."
    cd ..
  fi
fi

# 6. Final message
echo "🎉 Pre-push checks passed. Ready to push!"
