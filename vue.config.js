module.exports = {
  publicPath: './',
  productionSourceMap: false,
  chainWebpack(config) {
    config.plugin('html').tap(args => {
      args[0].title = 'GH-Release';
      return args;
    });
  }
};
