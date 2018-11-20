#!/usr/bin/env sh

yarn build
cd dist

git init
git add -A
git commit -m "Update demo page"
git remote add origin https://github.com/PavelShar/vue-and-devices-mocks.git
git push -f origin master:gh-pages