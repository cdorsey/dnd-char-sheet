yarn run build
git add dist/
git commit -m "Update gh-pages subtree"
git subtree push --prefix dist origin gh-pages
