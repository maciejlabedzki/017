/_
Use watcher to compile sass
_/
node watch-it.js src/sass/App.scss src/App.css

/\*
Use when the css is done to generate css without cloned selectors  
 Clear comments
postcss-combine-duplicated-selectors - to combined duplicated selectors
--map - to not have source map
postcss-minify-selectors - to remove not necessary spaces between selectors
postcss-discard-comments - to remove comments
postcss-clean - to clean css without using more options like [ postcss-minify-selectors , postcss-discard-comments ]
old [ postcss src/App.css --use postcss-combine-duplicated-selectors postcss-discard-comments postcss-minify-selectors postcss-clean --output src/App.css --map ]

\*/
postcss src/App.css --use postcss-combine-duplicated-selectors postcss-clean --output src/App.css --map

/_
Use to update small parts faster
_/
git status && git add . && git status && git commit -m 'update' && git push origin sass
