const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const noop = require('gulp-noop');

const { ts: config, isProd } = require('./config');

exports.ts = () => {
  const reporter = ts.reporter.fullReporter();
  const tsProject = ts.createProject("tsconfig.json");
  const tsResult = gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(tsProject(reporter));

  return tsResult.js
    .pipe(uglify())
    .pipe(isProd ? noop() : sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest));
}
