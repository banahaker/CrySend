#!/usr/bin/env sh
set -e

# build
npm run build

cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:banahaker/CrySend.git main:gh-pages

cd -