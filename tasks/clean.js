const del = require('del');

const { destRoot, static: staticConfig } = require('./config');

/**
 * 出力先のディレクトリを空にする
 */
exports.clean = async() => {
  await del([
    `${destRoot}/**`,
    `!${destRoot}`,
    `!${destRoot}/wp`,
    `!${destRoot}/index.php`,
    `!${destRoot}/.htaccess`
  ]);
  await del([
    `${destRoot}/${staticConfig.wp.dest}/**`,
    `!${destRoot}/${staticConfig.wp.dest}`
  ]);
  return
};
