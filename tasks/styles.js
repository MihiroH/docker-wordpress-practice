const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const noop = require('gulp-noop');
const cleancss = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');

const { sass: config, isProd } = require('./config');

exports.sass = () => {
  return gulp
    .src(config.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(isProd ? cleancss() : noop())
    .pipe(isProd ? noop() : sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest));
}
