module.exports = {
  lintOnSave: false,

  baseUrl: process.env.NODE_ENV === 'development' ? '/' : '/dnd-char-sheet/',
  productionSourceMap: false,

  devServer: {
    port: 3000,
  },
};
