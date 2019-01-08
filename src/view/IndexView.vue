<template>
    <div class="index-view has-header">
        <div class="mui-scroll-wrapper" id="refreshContainer">
            <div>

                <post-detail></post-detail>
                <reply-list></reply-list>
                <loading v-if="loading" />
            </div>
        </div>
    </div>
</template>

<script>
  import postDetail from '../components/postDetail'
  import replyList from '../components/replyList'

  export default {
    name: 'index-view',
    components: {postDetail, replyList},
    data() {
      return {
        nickname: ''
      }
    },
    computed: {},
    mounted() {

    },
    methods: {},
    created(options){
      console.log(options)
    }
  }
</script>

<style lang="scss" scoped>
    .home-view {
        background: #F4F4F4;
    }
</style>