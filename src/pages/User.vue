<template>
    <div>
        <header-bar :title="title" :pre-page="prePage"></header-bar>
        {{ user }}
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar'
    import TabBar from '../components/TabBar'
    import Common from '../assets/js/common'

    export default {
        name: 'User',
        data () {
            return {
                title: 'FMock',
                prePage: '/',
                user: ''
            }
        },
        components: {
            HeaderBar,
            TabBar,
        },
        created () {
            this.postDetail(this.$route.params.uuid)
        },
        methods: {
            postDetail: function (uuid) {
                let url = 'user/' + uuid;
                this.$http.get(url).then(res => {
                    if (res.status === 200) {
                        this.user = res.body.data
                    }
                }, res => {
                    if (res.status === 404) {
                        Common.redirectLogin(res.status + res.body.message, '/', 2000);
                    } else if (res.status !== 0 && res.status !== 404) {
                        Common.redirectLogin( res.status + '糟糕！网络不给力，重试一下吧', '/', 2000);
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .user-container {
        padding: 20px;
    }
</style>
