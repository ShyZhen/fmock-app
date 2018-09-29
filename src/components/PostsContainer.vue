<template>
    <div class="post-container">
        <!--<div class="ql-container ql-snow">-->
            <!--<div class="ql-editor">-->

                <div v-if="posts.length"
                     v-infinite-scroll="loadMore"
                     infinite-scroll-disabled="loading"
                     infinite-scroll-distance="10">
                    <li class="post-item" v-for="post in posts" :key="post.id">
                        <div class="post-detail-block">
                            <div class="post-detai-user">
                                <img class="avatar" :src="post.userInfo.avatar" alt="">
                                <div class="user-info">
                                    <router-link :to="{ path: '/user/' + post.userInfo.uuid }">
                                        <p class="user-name">{{ post.userInfo.username }}</p>
                                    </router-link>
                                    <p class="user-bio">{{ post.userInfo.bio }}</p>
                                </div>
                            </div>
                            <div class="post-detai-abstract">
                                <div>
                                    <router-link :to="{ path: '/post/' + post.uuid }">
                                        <p class="post-title">{{ post.title }}</p>
                                        <p class="post-content" v-html="post.content"></p>
                                    </router-link>
                                    <p>{{ post.follow_num }}</p>
                                    <p>{{ post.like_num }}</p>
                                    <p>{{ post.dislike_num }}</p>
                                </div>
                            </div>
                        </div>
                        <hr>
                    </li>
                    <p v-show="loadingIcon">
                        <mt-spinner type="snake" class="loading-more"></mt-spinner>
                    </p>
                </div>

            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Spinner, InfiniteScroll } from 'mint-ui';
    import Common from '../assets/js/common'
    Vue.use(InfiniteScroll);
    Vue.component(Spinner.name, Spinner);


    export default {
        name: 'posts-container',
        props: ['selected'],
        data () {
            return {
                posts: [],
                pageNum: 1,
                loading: false,
                loadingIcon: false,
            }
        },
        watch: {
            selected: function () {
                this.posts = [];
                this.pageNum = 1;
                this.loading = false;
                this.loadingIcon = false;

                this.init(this.selected);
                window.scroll(0, 0);
            }
        },
        mounted() {
            this.init(this.selected)
        },
        methods: {
            init: function (selected) {
                let url;
                if (selected === 'follow') {
                    url = 'follow/posts?page=' + this.pageNum;
                } else {
                    url = 'posts?sort=' + this.selected + '&page=' + this.pageNum;
                }
                this.$http.get(url).then(res => {
                    if (res.status === 200) {
                        this.loading = (res.body.data.data.length < 10);
                        this.posts = this.posts.concat(res.body.data.data);
                        this.loadingIcon = false;
                    }
                }, res => {
                    if (res.status !== 0) {
                        Common.redirect(res.status + res.body.message, '/', 2000);
                    }
                })
            },
            //无限加载函数
            loadMore() {
                this.loading = true;
                this.pageNum += 1;
                this.loadingIcon = true;

                setTimeout(() => {
                    this.init(this.selected);
                }, 500);
            }
        },
    }
</script>

<style scoped>
    .post-detail-block {
        padding: 15px;
        margin: 0 2px 16px 2px;
        overflow: hidden;
        word-break: break-word;
        word-wrap: break-word;
        white-space: normal;
        background: #fff;
        /*border: 1px solid #d1d5da;*/
        border-radius: 4px;
    }
    .post-detai-user {
        position: relative;
        padding: 6px 6px;
        font-size: 12px;
        line-height: 16px;
        color: #586069;
        background-color: #fff;
        border-bottom: 1px solid #e1e4e8;
    }
    .post-detai-user .avatar {
        float: left;
        margin-right: 10px;
        border-radius: 25px;
        height: 32px;
        width: 32px;
        display: inline-block;
        overflow: hidden;
        line-height: 1;
        vertical-align: middle;
    }
    .post-detai-user .user-info {
        margin-left: 42px;
    }
    .post-detai-user .user-info .user-name {
        font-weight: 600;
        color: #444d56;
    }
    .post-detail-block .post-detai-abstract {
        padding: 6px;
        padding-bottom: 8px!important;
    }
</style>