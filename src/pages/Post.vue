<template>
    <div>
        <header-bar :title="title" :pre-page="prePage" :rightIcon="rightIcon"></header-bar>

        <!-- post-container -->
        <post-container :post="post"></post-container>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar'
    import TabBar from '../components/TabBar'
    import PostContainer from '../components/PostContainer'
    import Common from '../assets/js/common'

    export default {
        name: 'Post',
        data () {
            return {
                title: 'FMock',
                prePage: true,
                rightIcon: 'more',
                post: {},
            }
        },
        components: {
            HeaderBar,
            TabBar,
            PostContainer,
        },
        mounted() {
            this.postDetail(this.$route.params.uuid)
        },
        methods: {
            postDetail: function (uuid) {
                let url = 'post/' + uuid;
                this.$http.get(url).then(res => {
                    if (res.status === 200) {
                        this.post = res.body.data;
                        this.title = this.post.title + ' - FMock 墨客';
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
