// wxapi.js
import wx from 'weixin-js-sdk'

const wxApi = {
  /**
   * [isweixin 判断是否微信浏览器]
   */
  isweixin() {
    const ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true
    } else {
      this.$router.push({path: '/wxkj/isnotWechat'})
      return false
    }
  },


// 这里接着上面的代码
  /**
   * [wxRegister 微信Api初始化]
   * @param  {Function} callback [ready回调函数]
   */
  wxRegister(callback) {
    let data = {params: {reqUrl: window.location.href}}
    this.ajaxGet(false, '/wxpl/cfgInfo', data).then((res) => {
      wx.config({
        debug: false, // 开启调试模式
        appId: res.appId, // 必填，公众号的唯一标识
        timestamp: res.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.noncestr, // 必填，生成签名的随机串
        signature: res.signature, // 必填，签名，见附录1
        jsApiList: [
          'onMenuShareAppMessage', // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
          'onMenuShareTimeline' // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      })
    }).catch((error) => {
      console.log(error)
    })
    wx.ready((res) => {
      // 如果需要定制ready回调方法
      if (callback) {
        callback()
      }
    })
  },

  /**
   * [isWxAuth 微信授权]
   */
  isWxAuth() {
    let localUid = localStorage.getItem('localUid')
    let localToken = localStorage.getItem('localToken')
    if (!localToken) {
      let token = this.$route.query.token
      let uid = this.$route.query.uid
      if (token) {
        localStorage.setItem('localToken', token)
        localStorage.setItem('localUid', uid)
      } else {
        // 将url编码后传给后端，解决微信过滤Vue hash模式 #被过滤的问题
        var u = encodeURIComponent(window.location.href)
        window.location.href = hostName + '/wxpl/oauth?forwardUrl=' + u
      }
    }
  }
}
export default wxApi