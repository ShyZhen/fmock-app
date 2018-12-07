<template>
    <div class="post-container">
        <!--<div class="ql-container ql-snow">-->
            <!--<div class="ql-editor">-->

                <mt-loadmore :top-method="pullToRefresh" ref="pullToRefresh">
                    <div v-if="posts.length">
                        <div class="post-item" v-for="post in posts" :key="post.id + '-' + selected">
                            <div class="post-detail-block">
                                <div class="post-detai-user">
                                    <img class="avatar" :src="post.user_info.avatar" alt="">
                                    <div class="user-info">
                                        <router-link :to="{ path: '/user/' + post.user_info.uuid }">
                                            <p class="user-name">{{ post.user_info.username }}</p>
                                        </router-link>
                                        <p class="user-bio">{{ post.user_info.bio }}</p>
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
                        </div>
                    </div>
                </mt-loadmore>
                <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading" spinner="spiral">
                    <span slot="no-more">
                        我们是有底线的
                    </span>
                    <span slot="no-results" class="nothing">
                        啊嘞！这里什么都没有
                    </span>
                </infinite-loading>

            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Loadmore } from 'mint-ui';
    import InfiniteLoading from 'vue-infinite-loading';
    import Common from '../assets/js/common'
    Vue.component(Loadmore.name, Loadmore);

    export default {
        name: 'posts-container',
        props: ['selected'],
        data () {
            return {
                posts: [],
            }
        },
        methods: {
            getPostList: function(pageNum, $state) {
                let url;
                if (this.selected === 'follow') {
                    url = 'follow/posts?page=' + pageNum;
                } else {
                    url = 'posts?sort=' + this.selected + '&page=' + pageNum;
                }
                this.$http.get(url).then(res => {
                    if (res.status === 200) {
                        console.log(this.selected, pageNum);
                        if (res.body.data.data.length) {
                            this.posts = this.posts.concat(res.body.data.data);
                            $state.loaded();
                            if (res.body.data.data.length < 10) {
                                $state.complete();
                            }
                        } else {
                            $state.complete();
                        }
                    }
                }, res => {
                    if (res.status !== 0) {
                        Common.redirect(res.status + res.body.message, '/', 2000);
                    }
                })
            },
            //无限加载函数
            infiniteHandler: function($state) {
                let pageNum = this.posts.length / 10 + 1;
                this.getPostList(pageNum, $state)
            },

            // infiniteReset: function() {
            //     this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
            // },

            // 下拉刷新
            pullToRefresh: function() {
                this.posts = [];
                this.infiniteHandler();
                this.$refs.pullToRefresh.onTopLoaded();
            }
        },
        components: {
            InfiniteLoading,
        },
    }
</script>

<style scoped>
    .post-container {
        height: 100%;
    }
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