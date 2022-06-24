var webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  // module: {
  //   rules: [
  //     // ... other rules omitted

  //     // this will apply to both plain `.scss` files
  //     // AND `<style lang="scss">` blocks in `.vue` files
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         'vue-style-loader',
  //         'css-loader',
  //         'sass-loader'
  //       ]
  //     }
  //   ]
  // },
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/portal/'
  //   : '/portal/',
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin(),
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    // optimization: {
    //   runtimeChunk: 'single',
    //   splitChunks: {
    //     chunks: 'all',
    //     maxInitialRequests: Infinity,
    //     minSize: 0,
    //     cacheGroups: {
    //       vendor: {
    //         test: /[\\/]node_modules[\\/]/,
    //         name(module) {
    //           const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
    //           return `npm.${packageName.replace('@', '')}`;
    //         },
    //       },
    //     },
    //   },
    // }
    // optimization: {
    //   splitChunks: {
    //     minSize: 10000,
    //     maxSize: 250000,
    //   }
    // }
  },
  chainWebpack(config) {
    //config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    // config.plugin(BundleAnalyzerPlugin).use(new BundleAnalyzerPlugin({}))

    //config.plugin('CompressionPlugin').use(CompressionPlugin);
    // config.plugin('CompressionPlugin').use(new CompressionPlugin({
    //   test: /\.(js|css|html)$/,
    //   filename: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   deleteOriginalAssets: true,
    //   cache: true,
    // }));
  },
  // dev: {
  //   before: function (app, server) {
  //     app.get('/apple-app-site-association', function (req, res) {
  //       console.log('get dev server')
  //       res.writeHead(200, {
  //         'Content-Type': 'application/json'
  //       });
  //       res.end(JSON.stringify(appleAppSiteAssociation));
  //     });
  //   }
  // },
  transpileDependencies: ['vuex-persist', 'bootstrap', 'bootstrap-vue'],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `$APPNAME: ${process.env.VUE_APP_NAME};`
      }
    }
  }
}

