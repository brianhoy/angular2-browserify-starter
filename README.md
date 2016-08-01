# angular2-browserify-starter
Usage
---------------------
1.  Download the repository.
2.  `$ npm install && npm start`

How it works
---------------------
It uses NPM as a build tool to keep things simple. Here's a snippet from the package.json:

```json
"build:ts": "tsc",
"build:js": "browserify app/compiled/main.js -o dist/app/bundle.js",
"build:minjs": "uglifyjs dist/app/bundle.js -o dist/app/bundle.min.js",
"build": "npm run build:ts && npm run build:js && npm run build:minjs",
"build:watch": "watch \"npm run build\" \"./app/src\"",

"server": "node server/server.js",
"server:watch": "nodemon server/server.js -w server",

"start": "concurrently \"npm run server:watch\" \"npm run build:watch\"",

"production": "npm run build && npm run server"
```

Notes
---------------------
I was inspired to use NPM as a build tool by [this blog post](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/). I refrained from using variables to keep things cross-platform (Windows using % and Linux uses $ for variables), but feel free to change the paths in the package.json if you want to change the file structure.
