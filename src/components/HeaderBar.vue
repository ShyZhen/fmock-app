<template>
    <div class="header-bar">
        <mt-header fixed :title="title">
            <router-link :to="prePage" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
                <mt-button :icon="rightIcon" slot="right"></mt-button>
        </mt-header>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Header, Button } from 'mint-ui';
    Vue.component(Header.name, Header);
    Vue.component(Button.name, Button);

    export default {
        name: 'header-bar',
        props: ['title', 'prePage', 'rightIcon'],
    }
</script>

<style scoped>
    .mint-header {
        top: 0;
        height: 60px;
        background-color: #3C3F41;
    }

    .header-bar {
        height: 60px;
    }
</style>