const ASSET_ROOT = 'src';
const DEST_ROOT = 'dist';

module.exports = {
  isProd: process.env.NODE_ENV === 'production',
  assetRoot: ASSET_ROOT,
  destRoot: DEST_ROOT,

  ts: {
    src: `${ASSET_ROOT}/assets/js/**/*.ts`,
    dest: `${DEST_ROOT}/assets/js`
  },

  sass: {
    src: `${ASSET_ROOT}/assets/scss/**/*.scss`,
    dest: `${DEST_ROOT}/assets/css`
  },

  svg: {
    src: `${ASSET_ROOT}/assets/img/**/*.svg`,
    dest: `${DEST_ROOT}/assets/img`
  },

  templates: {
    basedir: `${ASSET_ROOT}/templates`,
    pug: `${ASSET_ROOT}/templates/**/*.pug`,
    pages: [`${ASSET_ROOT}/templates/pages/**/*.pug`, `!${ASSET_ROOT}/templates/pages/**/_*.pug`],
    data: {
      meta: `${ASSET_ROOT}/json/meta.json`,
    },
    dest: DEST_ROOT,
    startPath: ''
  },

  static: {
    base: `${ASSET_ROOT}/static/**/*`,
    src: [`${ASSET_ROOT}/static/**/*`, `!${ASSET_ROOT}/static/wp/**`],
    assets: [
      `${ASSET_ROOT}/assets/**/*`,
      `!${ASSET_ROOT}/assets/scss/**`,
      `!${ASSET_ROOT}/assets/js/**`,
      `!${ASSET_ROOT}/assets/img/**/*.svg`
    ],
    wp: {
      src: `${ASSET_ROOT}/static/wp/**/*`,
      dest: 'wp/wp-content/themes/example'
    },
    dest: DEST_ROOT
  }
}
