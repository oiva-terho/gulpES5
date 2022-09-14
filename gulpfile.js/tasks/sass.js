// Modules
const { src, dest } = require("gulp");

// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");

// plugins
const gsass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupMedia = require("gulp-group-css-media-queries");
const sassGlob = require("gulp-sass-glob");
const webpCss = require("gulp-webp-css");

// sass processing
const sass = () => {
    return src(path.sass.src, { sourcemaps: app.isDev })
        .pipe(sassGlob())
        .pipe(gsass())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(groupMedia())
        .pipe(size({ title: "style.css" }))
        .pipe(dest(path.sass.dest, { sourcemaps: app.isDev }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(csso())
        .pipe(size({ title: "style.min.css" }))
        .pipe(dest(path.sass.dest, { sourcemaps: app.isDev }));
};

module.exports = sass;
