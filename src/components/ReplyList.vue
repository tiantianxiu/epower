<template>
  <div class="relay-list">


    <div class="section-title">
          <span>
            全部回复（9）
          </span>
    </div>

    <div class="section-body">


      <div class="article">
        <div class="author-info">
          <div class="author">
            <img src="https://api.e-power.vip//get_image.php?type=avatar&file_url=data/avatar/000/00/52/93_avatar_middle.jpg"/>
          </div>
          <div class="author-name">
            <span>GE鹰车友会</span>
            <em class="tag-item tag-red">楼主</em>
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
          <div class="ext">8楼</div>
        </div>
        <div>
          <div class="grey quote">
            <blockquote>引用: <a href="#" target="_blank">LYNKCO帅小伙 发表于 2018-12-21 10:10</a><br/>
              挺丑的
            </blockquote>
          </div>
          <br/>
          比BYD好看多了
        </div>
        <div class="article-ext-info">
          <span>2017-12-19</span>
          <a href="#popover" class="item more-function">

              <div class="itemFunction">
                <img class="icon-width" src="http://cdn.e-power.vip/resources/image/icon-text.png"/>
              </div>
              <div :class="{itemFunction: true, active : is_cai}">
                <div class="ext-no">0</div>
                <img class="ib-width" src="http://cdn.e-power.vip/resources/image/icon-zan.png"/>
                <!--<img class="ib-width" src="http://cdn.e-power.vip/resources/image/icon_zan_active.png"/>-->
              </div>
              <div :class="{itemFunction: true, active : is_zan}">
                <div class="ext-no">0</div>
                <img class="ib-width" src="http://cdn.e-power.vip/resources/image/icon-cai.png"/>
                <!--<img src="http://cdn.e-power.vip/resources/image/ib-cai-gray.png"/>-->
              </div>

          </a>
        </div>
      </div>

      <div class="article">
        <div class="author-info">
          <div class="author">
            <img src="https://api.e-power.vip//get_image.php?type=avatar&file_url=data/avatar/000/00/52/93_avatar_middle.jpg"/>
          </div>
          <div class="author-name">
            <span>GE鹰车友会</span>
            <em class="tag-item tag-red">楼主</em>
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
          <div class="ext">8楼</div>
        </div>
        <div>
          <div class="grey quote">
            <blockquote>引用: <a href="#" target="_blank">LYNKCO帅小伙 发表于 2018-12-21 10:10</a><br/>
              挺丑的
            </blockquote>
          </div>
          <br/>
          比BYD好看多了
        </div>
        <div class="article-ext-info">
          <span>2017-12-19</span>
          <a href="#popover" class="item more-function">
            <div class="itemFunction">
              <img class="icon-width" src="http://cdn.e-power.vip/resources/image/icon-text.png"/>
            </div>
            <div :class="{itemFunction: true, active : is_cai}">
              <div class="ext-no">0</div>
              <img class="ib-width" src="http://cdn.e-power.vip/resources/image/icon-zan.png"/>
              <!--<img class="ib-width" src="http://cdn.e-power.vip/resources/image/icon_zan_active.png"/>-->
            </div>
            <div :class="{itemFunction: true, active : is_zan}">
              <div class="ext-no">0</div>
              <img class="ib-width" src="http://cdn.e-power.vip/resources/image/icon-cai.png"/>
              <!--<img src="http://cdn.e-power.vip/resources/image/ib-cai-gray.png"/>-->
            </div>

          </a>
        </div>
      </div>

    </div>


  </div>


</template>

<script>
  export default {
    name: 'reply-list',
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
        this.$store.dispatch({
          type: 'getReplyList',
          axios: this.axios,
          tid: this.sort,
          page_index: this.page_index,
          page_size: this.page_size
        }).then((res) => {

        })
      }
    },
    mounted() {
      // this.getReplyList()
    }
  }
</script>

<style lang="scss">
  .relay-list {
    background-color: white;

    .article-ext-info {
      display: flex;
      color: #898989;
      font-size: 12px;
      margin-top: 10px;
      span {
        width: 100px;
        text-align: left;
      }
      .more-function {
        display: flex;
        align-items: center;
        .itemFunction {
          display: flex;
          align-items: center;
          width: 50px;
          position: relative;

          .ext-no {
            position: absolute;
            top: 20%;
            left: 50%;
            color: #bfbfbf;
            transform: scale(0.9);
            line-height: 100%;
          }
        }
      }
    }

  }

</style>
