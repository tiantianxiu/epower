import mui from '../../assets/js/mui.min'

mui.init({
  pullRefresh : {
    container: '#refreshContainer',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
    up : {
      height: 0,//可选.默认50.触发上拉加载拖动距离
      auto: false,//可选,默认false.自动上拉加载一次
      contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
      contentnomore:'已经拉到底啦',//可选，请求完毕若没有更多数据时显示的提醒内容；
      callback: pullfreshFunction //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
    }
  }
})
function pullfreshFunction() {
  const that = this
  //业务逻辑代码，比如通过ajax从服务器获取新数据；
  console.log(this)
  //注意：
  //1、加载完新数据后，必须执行如下代码，true表示没有更多数据了：
  //2、若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
  that.endPullupToRefresh(true|false);
}



export default mui

