#!/bin/bash
set -e

if ! command -v vercel &> /dev/null; then
  echo "Installing Vercel CLI..."
  npm install -g vercel
fi

npm run build
vercel deploy --prod --yes