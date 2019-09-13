const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const { browserSyncInstance } = require("./browserSync");
var cssWrap = require("gulp-css-wrap");

const source = "scss/main.scss";
const WhatchSource = "scss/**/*.scss";
const CssDest = "public/css";

function buildCss() {
  return src(source)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(dest(CssDest))
    .pipe(dest("assets/css"))
    .pipe(browserSyncInstance.stream());
}

watch([WhatchSource], buildCss);

exports.buildCss = buildCss;
