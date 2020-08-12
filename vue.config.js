const PostCompilePlugin = require("webpack-post-compile-plugin");
const TransformModulesPlugin = require("webpack-transform-modules-plugin");
module.exports = {
  configureWebpack: {
    plugins: [new PostCompilePlugin(), new TransformModulesPlugin()]
  },
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true
        // 自定义主题场景
        // import: [path.resolve(__dirname, './src/theme')]
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false
};
