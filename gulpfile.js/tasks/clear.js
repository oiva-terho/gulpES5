const del = require("del");

// Configuration
const path = require("../config/path.js");

// Remove dist folder
const clear = () => {
    return del(path.root);
};

module.exports = clear;