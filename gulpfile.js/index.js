// Modules
const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

// Configuration
const path = require("./config/path.js");
const app = require("./config/app.js");

// Tasks
const clear = require("./tasks/clear.js");
const pug = require("./tasks/pug.js");
const sass = require("./tasks/sass.js");
const js = require("./tasks/js.js");
const img = require("./tasks/img.js");
const font = require("./tasks/font.js");

// Server
const server= () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
};

// Watcher
const watcher = () => {
    watch(path.pug.watch, pug).on("all", browserSync.reload);
    watch(path.sass.watch, sass).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
    watch(path.font.watch, font).on("all", browserSync.reload);
};

const build = series(
    clear,
    parallel(pug, sass, js, img, font)
);

const dev = series(
    build,
    parallel(watcher, server)
);

// Tasks
exports.pug = pug;
exports.sass = sass;
exports.watch = watcher;
exports.js = js;
exports.img = img;
exports.font = font;

// Compile
exports.default = app.isProd ? build : dev;
exports.build = build;
exports.dev = dev;