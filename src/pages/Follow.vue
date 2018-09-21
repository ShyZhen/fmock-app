<template>
    <div>
        <header-bar :title="title" :pre-page="prePage" :rightIcon="rightIcon"></header-bar>
        <p>
            {{ follows }}
        </p>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar'
    import TabBar from '../components/TabBar'
    import Common from '../assets/js/common'

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
        },
        methods: {
            getMyFollow: function () {
                let url = 'follows';
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

