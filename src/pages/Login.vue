<template>
    <div>
        <header-bar :title="title" :pre-page="prePage"></header-bar>
        <div>
            <mt-field label="邮箱" placeholder="请输入登陆邮箱" type="email" :state=state v-model="email" @blur.native.capture="validateEmail"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-button type="primary" size="large" @click.native="login">登录</mt-button>
        </div>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import Vue from 'vue'
    import HeaderBar from '../components/HeaderBar'
    import TabBar from '../components/TabBar'
    import { Field, Button, Toast } from 'mint-ui'
    import Common from '../assets/js/common'

    Vue.component(Field.name, Field);
    Vue.component(Button.name, Button);

    export default {
        name: 'Login',
        data () {
            return {
                title: '登录',
                prePage: '/',
                email: '',
                password: '',
                state: ''
            }
        },
        components: {
            HeaderBar,
            TabBar,
        },
        methods: {
            validateEmail: function () {
                let regEmail = /^([a-zA-Z0-9]+[_|\-|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                if (this.email === '') {
                    this.state = 'error';
                    Toast('请输入邮箱');
                    return false;
                } else if (!regEmail.test(this.email)) {
                    this.state = 'error';
                    Toast('邮箱格式不正确');
                    return false;
                } else {
                    this.state = 'success';
                    return true
                }
            },
            login: function () {
                if (this.validateEmail()) {
                    let url = 'login';
                    let data = {
                        email: this.email,
                        password: this.password,
                    };
                    this.$http.post(url, data).then((res) => {
                        // 登录成功 存 token 和 userInfo
                        if (res.status === 200) {
                            Common.setLocalUserToken('fmock-token', 'Bearer ' + res.body.accessToken);
                            Common.setLocalUserToken('fmock-user-info', JSON.stringify(res.body.userInfo));
                            this.$store.dispatch('setUserInfo', res.body.userInfo);
                            Common.redirectLogin('登录成功', '/index', 500)
                        }
                    }, (res) => {
                        if (res.status !== 0) {
                            Common.redirectLogin( res.status + '糟糕！网络不给力，重试一下吧', '/login', 2000);
                        }
                    })
                }
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
