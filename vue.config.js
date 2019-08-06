module.exports = {
  /**
   *  proxy(3.x) : 数据劫持  defineProperty (2.x)
   * /myapi/movie/in_theaters
   */
  devServer: {
    proxy: {
      '/myapi': {
        // 最终结果 :
        // https://douban.uieee.com/v2/movie/in_theaters
        //  https://douban.uieee.com/v2/myapi/movie/in_theaters
        //  https://douban.uieee.com/v2/movie/in_theaters
        target: 'https://douban.uieee.com/v2/',
        pathRewrite: { '^/myapi': '' },

        // 设置https
        secure: false,
        // 必须设置该项
        changeOrigin: true
      }
    }
  }
}

// axios.get('/aaa/moview...')

// https://douban.uieee.com/v1/movie/in_theaters   测试
// https://douban.uieee.com/v2/movie/in_theaters   开发使用的
