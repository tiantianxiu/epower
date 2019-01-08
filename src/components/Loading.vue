<template>
  <div class="loading">
    <div class='mock'>
      <div class='main'>
        loading...
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'loading',
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  .loading {
    width: 100vh;
    height: 100vh;
    position: relative;
  }

  .mock {
    tion {
      width: 100vh;
      height: 100vh;
      position: absolute;
      z-index: 100;
      background-color: #abb2bf;
    }
    .main {
      margin: 200px auto;
      text-align: center;
    }
  }
</style>
