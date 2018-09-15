<template>
    <div>
        <header-bar :title="title" :pre-page="prePage"></header-bar>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar'
    import TabBar from '../components/TabBar'
    import { Toast } from 'mint-ui';

    export default {
        name: 'Index',
        data () {
            return {
                title: '个人信息',
                prePage: '/'
            }
        },
        created() {
            Toast({
                message: '您还未登陆',
                duration: 3000,
            });
        },
        components: {
            HeaderBar,
            TabBar,
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

