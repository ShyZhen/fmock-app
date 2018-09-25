<template>
    <div>
        <header-bar :title="title" :pre-page="prePage" :rightIcon="rightIcon"></header-bar>
        <div v-if="Object.keys(myInfo).length">
            <div>
                <p>
                    {{ myInfo }}
                </p>
            </div>
            <mt-button type="primary" size="large" @click.native="logout">退出</mt-button>
        </div>
        <div v-else>
            还没登录
        </div>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar'
    import TabBar from '../components/TabBar'
    import Common from '../assets/js/common'

    export default {
        name: 'Mime',
        data () {
            return {
                title: '个人信息',
                prePage: '/',
                rightIcon: 'more',
                myInfo: ''
            }
        },
        mounted() {
            Common.checkLogin() && this.getMyInfo();
        },
        components: {
            HeaderBar,
            TabBar,
        },
        methods: {
            getMyInfo: function () {
                this.myInfo = this.$store.getters.userInfo
            },
            logout: function () {
                let url = 'logout';
                this.$http.get(url).then(res => {
                    // 登出成功 删 token 和 userInfo
                    if (res.status === 200) {
                        Common.clearLocalUserToken('fmock-token');
                        Common.clearLocalUserToken('fmock-user-info');
                        this.$store.dispatch('removeUserInfo', res.body.userInfo);
                        Common.redirect('登出成功', 'index', 500)
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

