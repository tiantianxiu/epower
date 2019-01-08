<template>
  <div class="detail-view has-header">
    <div class="mui-scroll-wrapper" id="refreshContainer">
      <div>

        <post-detail></post-detail>
        <reply-list></reply-list>
      </div>
    </div>
    <qr-code></qr-code>
  </div>
</template>

<script>
  import postDetail from '../components/postDetail'
  import replyList from '../components/replyList'
  import qrCode from '../components/qrCode'

  export default {
    name: 'detailView',
    components: {postDetail, replyList, qrCode},
    data() {
      return {
        nickname: '',
        loading: 0
      }
    },
    computed: {
    },
    mounted() {

    },
    methods: {
    },

  }
</script>

<style lang="scss" scoped>
  .home-view {
    background: #F4F4F4;
  }

</style>