const state = {
  items: '',
  flag: 0,
  cartsNum: 0
}

const mutations = {}

const actions = {

  /**
   * 单个添加购物车
   * @type {{addCart({dispatch: *}, *=): *}}
   */
  getReplyList({dispatch}, payload) {
    return new Promise((resolve, reject) => {
      payload.axios.post(
          'get_post_detail_comment.php',
          {
            token: '8a3euR3lAqoNums0i86TpNBJCz8v2csLvOAhkNvGU/uVLqDKxNgTAGOArlOvQbnWo2h2GZXet2gIFGFJSgrFBsieYaNFvc/u23JL6ptklOAUUD6Y/5Jil4DXLnLJbQg4aDTD9ul7jPEf44jcXctRqG3MdfSH1+7Zuq8ewl9R/g',
            tid: payload.tid,
            page_index: payload.page_index,
            page_size: payload.page_size
          }
      )
          .then(res => {
            resolve(res)
          }, err => {
            reject(err)
          })
          .catch(error => {
            console.log(error)
            // this.$store.state.common.brea('网络错误，不能访问')
          })
    })
  }
}

// 接上面的代码
/**
 * [ShareTimeline 微信分享到朋友圈]
 * @param {[type]} opstion [分享信息]
 * @param {[type]} success [成功回调]
 * @param {[type]} error   [失败回调]
 */
// ShareTimeline(opstion)
// {
//   wx.onMenuShareTimeline({
//     title: opstion.title, // 分享标题
//     link: opstion.link, // 分享链接
//     imgUrl: opstion.imgUrl, // 分享图标
//     success() {
//       // 用户成功分享后执行的回调函数
//       opstion.success()
//     },
//     cancel() {
//       // 用户取消分享后执行的回调函数
//       opstion.error()
//     }
//   })
// }

export default {
  state,
  mutations,
  actions
}
