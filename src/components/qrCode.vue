<template>
  <div class="qr-code">
    <!--<a href="#popover" id="openPopover" class="mui-btn mui-btn-primary mui-btn-block">-->
      <!--打开弹出菜单-->
    <!--</a>-->
    <div id="popover" class="mui-popover">

      <img src="http://www.e-power.vip/data/attachment/common/cf/103941ikcmrmkorsxccc8u.png" alt="">

    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'qr-code',
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
.qr-code{
  position: fixed;
  z-index: 999;
  width: 100%;
  .mui-popover{
    top: 108px !important;
    left: 25% !important;
    background: none;
    box-shadow: none;
    width: 50%;
    img{
      width: 100%;
    }
    ::after{
      display: none;
    }
  }
}
.mui-backdrop{
  background-color: rgba(0, 0, 0, .1);
}
</style>
