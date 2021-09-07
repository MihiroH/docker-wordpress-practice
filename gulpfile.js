const gulp = require('gulp');

const {
  ts: tsConfig,
  sass: sassConfig,
  svg: svgConfig,
  templates: templatesConfig,
  static: staticConfig,
} = require('./tasks/config');

const { ts } = require('./tasks/scripts');
const { sass } = require('./tasks/styles');
const { svg } = require('./tasks/svg');
const { templates } = require('./tasks/templates');
const { copy } = require('./tasks/copy');
const { clean } = require('./tasks/clean');

/**
 * ファイルの変更を監視
 */
const watchFiles = () => {
  // Scripts
  gulp.watch(tsConfig.src, gulp.series(ts));

  // Sass
  gulp.watch(sassConfig.src, gulp.series(sass));

  // Svg
  gulp.watch(svgConfig.src, gulp.series(svg));

  // Templates
  gulp.watch(
    [templatesConfig.pug, templatesConfig.data.meta],
    gulp.series(templates)
  );

  // Static
  gulp.watch(
    [staticConfig.base, ...staticConfig.assets],
    gulp.series(copy)
  );
};

/**
 * 開発用ビルド
 */
gulp.task('default', gulp.series(
  clean,
  gulp.parallel(ts, sass, svg, templates, copy),
  watchFiles
));

/**
 * 本番用ビルド
 */
gulp.task('build', gulp.series(
  clean,
  gulp.parallel(ts, sass, svg, templates, copy)
));
