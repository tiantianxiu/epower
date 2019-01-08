<template>
  <div class="post-detail">

    <div class="section-body">

      <div class="section-title">
          <span>
              所属专区 新能源杂谈
          </span>
      </div>
    </div>
    <div class="section-body">
      <div class="article">
        <div class="author-info">
          <div class="author">
            <img src="https://api.e-power.vip//get_image.php?type=avatar&file_url=data/avatar/000/00/52/93_avatar_middle.jpg"/>
          </div>
          <div class="author-name">
            <span>GE鹰车友会</span>
            <div class="icon1">
              <img class="icon-width icon-width-l" src="http://cdn.e-power.vip/resources/image/icon-v2.png"/>
            </div>
            <em class="tag-item tag-green">初级会员</em>
          </div>
          <div class="tag-item-wrap">
            <em class="tag-item tag-green">
              <img class="icon-v" src="http://cdn.e-power.vip/resources/image/icon-v.png"/>车代表
            </em>
            <em class="tag-item tag-green">吉利博瑞</em>
            <div class="e-power">
              <img src="http://cdn.e-power.vip/resources/image/e_power.png"/>
              <span class="text-green">2</span>
              <i>度</i>
            </div>
          </div>

          <div class="ext">
            <span>浏览：2.08K</span>
            2018-12-18
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'post-detail',
    components: {},
    data() {
      return {
        tid: 10029,
        is_cai: true,
        is_zan: false,
        page_size: 5,
        page_index: 0
      }
    },
    methods: {
      getReplyList: function () {
        const that = this
        console.log()
        this.$store.dispatch({
          type: 'getReplyList',
          axios: that.axios,
          tid: that.id,
          page_index: that.page_index,
          page_size: that.page_size
        }).then((res) => {
          console.log(res)
        })
      }
    },
    mounted() {
      // this.getReplyList()
    },
    created(options){
      const that = this
      let id = this.$route.params.id
      that.id = id
      // that.getReplyList()
    }
  }
</script>

<style lang="scss">
  .ext {
    span {
      margin: 0 10px;
    }
  }

</style>
