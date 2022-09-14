// Modules
const { src, dest } = require("gulp");

// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const fileInclude = require("gulp-file-include"); 
const htmlmin = require("gulp-htmlmin"); 
const size = require("gulp-size");
const webpHtml = require("gulp-webp-html");

// html processing
const html = () => {
    return src(path.html.src)
        .pipe(fileInclude())
        .pipe(webpHtml())
        .pipe(size({ title: 'Before compression' }))
        .pipe(htmlmin(app.htmlmin))
        .pipe(size({ title: 'After compression' }))
        .pipe(dest(path.html.dest));
};

module.exports = html;