const fs = require('fs');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const pug = require('gulp-pug');
const pugPHPFilter = require('pug-php-filter');
const rename = require('gulp-rename');

const { templates: config, static: staticConfig } = require('./config');

exports.templates = () => {
  return gulp
    .src(config.pages)
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(pug({
      pretty: true,
      filters: {
        php: pugPHPFilter
      },
      basedir: config.basedir,
      locals: {
        ROOT: config.startPath,
        _JSON: {
          meta: JSON.parse(fs.readFileSync(config.data.meta, 'utf-8'))
        },
        TIMESTAMP: Date.now()
      }
    }))
    .pipe(rename(path => {
      const basename = path.basename.replace(/_wp$/, '')

      if (/_wp$/.test(path.basename)) {
        path.dirname = staticConfig.wp.dest
        path.basename = basename
        path.extname = '.php'
      } else if (basename !== 'index') {
        path.dirname += `/${path.basename}`
        path.basename = 'index'
      }
    }))
    .pipe(gulp.dest(config.dest));
}
