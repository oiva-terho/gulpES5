// Modules
const { src, dest } = require("gulp");

// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");

// plugins
const babel = require("gulp-babel");
const webpack = require("webpack-stream");

// JavaScript processing
const js = () => {
    return src(path.js.src, { sourcemaps: app.isDev })
        .pipe(babel())
        .pipe(webpack(app.webpack))
        .pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
};

module.exports = js;
