<template>
    <div>
        <header-bar :title="title" :pre-page="prePage"></header-bar>
        <mt-navbar fixed v-model="selected">
            <mt-tab-item id="post-new">最新</mt-tab-item>
            <mt-tab-item id="post-hot">最热</mt-tab-item>
            <mt-tab-item id="post-anonymous">只看匿名</mt-tab-item>
        </mt-navbar>

        <!-- post-container -->
        <post-container :posts="posts"></post-container>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar'
    import TabBar from '../components/TabBar'
    import PostContainer from '../components/PostContainer'

    import Vue from 'vue'
    import { Navbar, TabItem } from 'mint-ui';
    Vue.component(Navbar.name, Navbar);
    Vue.component(TabItem.name, TabItem);

    export default {
        name: 'Index',
        data () {
            return {
                title: 'FMock',
                prePage: '/',
                selected: 'post-new',
                posts: [],
            }
        },
        components: {
            HeaderBar,
            TabBar,
            PostContainer,
        },
        watch: {
            selected: function () {
                this.getAllPosts(this.selected)
            }
        },
        created () {
            this.getAllPosts(this.selected)
        },
        methods: {
            getAllPosts: function (type) {
                var url = 'posts?sort=' + type;
                this.$http.get(url).then(res => {
                    if (res.status === 200) {
                        this.posts = res.body.data
                    } else {
                        console.error('asdf')
                    }
                }, res => {
                    this.error = res.status;
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
</style>
