const gulp = require('gulp');
const rename = require('gulp-rename');

const { assetRoot, static: config } = require('./config');

exports.copy = callback => {
  // Copy other than wp
  gulp
    .src(config.src)
    .pipe(rename(path => {
      let dirname = '';
      dirname = path.dirname.replace(/^static/g, '');
      dirname = dirname.replace(/^\//g, '');
      path.dirname = dirname;
    }))
    .pipe(gulp.dest(config.dest));

  gulp
    .src(config.assets, { base: assetRoot })
    .pipe(gulp.dest(config.dest));

  // Copy wp
  gulp
    .src(config.wp.src, { base: assetRoot })
    .pipe(rename(path => {
      path.dirname = path.dirname.replace(/^static\/wp/g, config.wp.dest);
    }))
    .pipe(gulp.dest(config.dest));

  callback();
};
