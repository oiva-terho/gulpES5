// Modules
const { src, dest } = require("gulp");

// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");

// plugins
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupMedia = require("gulp-group-css-media-queries");
const webpCss = require("gulp-webp-css");
const { web } = require("webpack");

// css processing
const css = () => {
    return src(path.css.src, { sourcemaps: app.isDev })
        .pipe(concat("style.css"))
        .pipe(cssimport())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupMedia())
        .pipe(size({ title: "style.css" }))
        .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(csso())
        .pipe(size({ title: "style.min.css" }))
        .pipe(dest(path.css.dest, { sourcemaps: app.isDev }));
};

module.exports = css;
