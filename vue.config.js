module.exports = {
  "configureWebpack": {
    "devtool": "source-map"
  },
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      '/api/': {
        target: "http://localhost:3000",
      }
    }
  }
}