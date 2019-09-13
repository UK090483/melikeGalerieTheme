const { src, dest, series } = require("gulp");
const { buildCss } = require("./buildCss");
const { buildJs } = require("./buildJs");
const { StartBrowserSync } = require("./browserSync");

exports.default = StartBrowserSync;
