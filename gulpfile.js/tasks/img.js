// Modules
const { src, dest } = require("gulp");

// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp");
const gulpif = require("gulp-if");

// Images processing
const img = () => {
    return src(path.img.src)
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
        .pipe(dest(path.img.dest));
};

module.exports = img;
