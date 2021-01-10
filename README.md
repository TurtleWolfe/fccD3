# [fccD3 Template](https://www.google.com "Google's Homepage")

```bash
# repo
touch .gitignore
# node_modules
git init
git add .
git commit -m "first commit"
git remote add origin git@github.com
npm init -y
npm i gh-pages -D
# npm i gh-pages --save-dev
# homepage
# "deploy": "gh-pages -d dist"
mkdir dist
cd dist
touch index.html
# !
touch about.html
npm run deploy
```
