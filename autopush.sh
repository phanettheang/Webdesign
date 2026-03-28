#!/bin/bash

set -e

MESSAGE=${1:-"auto commit $(date '+%Y-%m-%d %H:%M:%S')"}

echo "Staging all changes..."
git add .

if git diff --cached --quiet; then
  echo "Nothing to commit. Working tree clean."
  exit 0
fi

echo "Committing: $MESSAGE"
git commit -m "$MESSAGE"

echo "Pushing to main..."
git push origin main

echo "Done!"
