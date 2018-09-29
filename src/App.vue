<template>
  <div id="app">
      <!--<router-view></router-view>-->
      <keep-alive>
          <router-view v-if="$route.meta.isKeepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.isKeepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import 'assets/css/app.less';
@import "assets/css/markdown.css";
/*@import '../node_modules/quill/dist/quill.snow.css';*/
</style>
