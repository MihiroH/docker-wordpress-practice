const gulp = require('gulp');
const svgo = require('gulp-svgo');

const { svg: config } = require('./config');

exports.svg = () => {
  return gulp
    .src(config.src)
    .pipe(svgo({
      plugins: [{ removeViewBox: false }]
    }))
    .pipe(gulp.dest(config.dest));
}
