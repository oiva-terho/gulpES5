// Modules
const { src, dest } = require("gulp");

// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const pugPlug = require("gulp-pug");
const webpHtml = require("gulp-webp-html");

// Pug processing
const pug = () => {
    return src(path.pug.src)
        .pipe(pugPlug(app.pug))
        .pipe(webpHtml())
        .pipe(dest(path.pug.dest));
};

module.exports = pug;
