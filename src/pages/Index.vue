<template>
    <div>
        <header-bar :title="title" :pre-page="prePage" :rightIcon="rightIcon"></header-bar>
        <!--<search-bar></search-bar>-->
        <mt-navbar fixed v-model="selected">
            <mt-tab-item id="post-new">最新</mt-tab-item>
            <mt-tab-item id="post-hot">最热</mt-tab-item>
            <mt-tab-item id="post-anonymous">只看匿名</mt-tab-item>
        </mt-navbar>

         <!--post-container-->
        <posts-container :selected="selected"></posts-container>
        <!--<mt-tab-container v-model="selected">-->
            <!--<mt-tab-container-item id="post-new">-->
                <!--<posts-container selected="post-new"></posts-container>-->
            <!--</mt-tab-container-item>-->
            <!--<mt-tab-container-item id="post-hot">-->
                <!--<posts-container selected="post-hot"></posts-container>-->
            <!--</mt-tab-container-item>-->
            <!--<mt-tab-container-item id="post-anonymous">-->
                <!--<posts-container selected="post-anonymous"></posts-container>-->
            <!--</mt-tab-container-item>-->
        <!--</mt-tab-container>-->

        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar'
    import SearchBar from '../components/SearchBar'
    import TabBar from '../components/TabBar'
    import PostsContainer from '../components/PostsContainer'

    import Vue from 'vue'
    import { Navbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);
    Vue.component(TabContainer.name, TabContainer);
    Vue.component(TabContainerItem.name, TabContainerItem);

    export default {
        name: 'Index',
        data () {
            return {
                title: 'FMock 墨客',
                prePage: false,
                rightIcon: 'search',
                selected: 'post-new',
            }
        },
        components: {
            HeaderBar,
            TabBar,
            PostsContainer,
            SearchBar,
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mint-navbar {
        top: 60px;
    }
    .post-container {
        padding: 60px 8px 80px 8px;
    }
</style>
