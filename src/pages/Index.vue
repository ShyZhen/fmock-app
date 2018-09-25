<template>
    <div>
        <header-bar :title="title" :pre-page="prePage" :rightIcon="rightIcon"></header-bar>
        <!--<search-bar></search-bar>-->
        <mt-navbar fixed v-model="selected">
            <mt-tab-item id="post-new">最新</mt-tab-item>
            <mt-tab-item id="post-hot">最热</mt-tab-item>
            <mt-tab-item id="post-anonymous">只看匿名</mt-tab-item>
        </mt-navbar>

        <!-- post-container -->
        <posts-container :posts="posts"></posts-container>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar'
    import SearchBar from '../components/SearchBar'
    import TabBar from '../components/TabBar'
    import PostsContainer from '../components/PostsContainer'

    import Vue from 'vue'
    import Common from '../assets/js/common'
    import { Navbar, TabItem } from 'mint-ui';
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);

    export default {
        name: 'Index',
        data () {
            return {
                title: 'FMock',
                prePage: '/',
                rightIcon: 'search',
                selected: 'post-new',
                posts: {},
            }
        },
        components: {
            HeaderBar,
            TabBar,
            PostsContainer,
            SearchBar,
        },
        watch: {
            selected: function () {
                this.getAllPosts(this.selected)
            }
        },
        mounted() {
            this.getAllPosts(this.selected)
        },
        methods: {
            getAllPosts: function (type) {
                let url = 'posts?sort=' + type;
                this.$http.get(url).then(res => {
                    if (res.status === 200) {
                        this.posts = res.body.data
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
    .mint-navbar {
        top: 60px;
    }
    .post-container {
        padding: 60px 8px 80px 8px;
    }
</style>
