<template>
    <div>
        <header-bar :title="title" :pre-page="prePage" :rightIcon="rightIcon"></header-bar>

        <!-- post-container -->
        <posts-container :selected="selected"></posts-container>

        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar'
    import TabBar from '../components/TabBar'
    import Common from '../assets/js/common'
    import PostsContainer from '../components/PostsContainer'

    export default {
        name: 'Index',
        data () {
            return {
                title: '我的关注',
                prePage: false,
                rightIcon: 'search',
                selected: 'follow'
            }
        },
        mounted() {
            Common.checkLogin();
        },
        components: {
            HeaderBar,
            TabBar,
            PostsContainer,
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .post-container {
        padding: 20px 8px 80px 8px;
    }
</style>
