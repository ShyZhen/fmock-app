<template>
    <div>
        <header-bar :title="title" :pre-page="prePage" :rightIcon="rightIcon"></header-bar>

        <!-- post-container -->
        <posts-container :posts="follows"></posts-container>

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
                prePage: '/',
                rightIcon: 'search',
                follows: ''
            }
        },
        mounted() {
            Common.checkLogin() && this.getMyFollow();
        },
        components: {
            HeaderBar,
            TabBar,
            PostsContainer,
        },
        methods: {
            getMyFollow: function () {
                let url = 'follow/posts';
                this.$http.get(url).then(res => {
                    if (res.status === 200) {
                        this.follows = res.body.data
                    }
                }, res => {
                    if (res.status !== 0) {
                        Common.redirect(res.status + res.body.message, '/', 2000);
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .post-container {
        padding: 20px 8px 80px 8px;
    }
</style>
