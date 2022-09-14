// Modules
const { src, dest } = require("gulp");

// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");
const gulpif = require("gulp-if");

// Fonts processing
const font = () => {
    return src(path.font.src)
        .pipe(newer(path.font.dest))
        .pipe(dest(path.font.dest))
        .pipe(gulpif(app.isProd, 
            src(path.font.src)
            .pipe(fonter(app.fonter))
            .pipe(newer(path.font.dest))
            .pipe(dest(path.font.dest))
            .pipe(ttf2woff2())
        )
    );
};

module.exports = font;
