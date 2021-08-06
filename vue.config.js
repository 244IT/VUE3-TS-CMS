module.exports = {
  outputDir: "./build",
  devServer: {
    proxy: {
      "/api": {
        target: "https://coderwhy.chenhaohui.cn",
        pathRewrite: {
          "^/api": ""
        },
        secure: false,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        assets: "@/assets"
      }
    }
  }
}
