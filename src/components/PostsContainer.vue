<template>
    <div class="post-container">
        <!--<div class="ql-container ql-snow">-->
            <!--<div class="ql-editor">-->
                <div v-if="posts.total">
                    <li class="post-item" v-for="post in posts.data" :key="post.id">
                        <router-link :to="{ path: '/user/' + post.userinfo.uuid }">
                            <p>{{ post.userinfo.username }}</p>
                            <p><img :src="post.userinfo.avatar" alt=""></p>
                            <p>{{ post.userinfo.bio }}</p>
                        </router-link>
                        <router-link :to="{ path: '/post/' + post.uuid }">
                            <p v-html="post.content"></p>
                            <p>{{ post.like_num }}</p>
                            <p>{{ post.dislike_num }}</p>
                        </router-link>
                        <hr>
                    </li>
                </div>
                <div v-else>
                    <li class="post-item">
                        <p>暂无数据</p>
                    </li>
                </div>
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: 'posts-container',
        props: ['posts'],
    }
</script>

<style scoped>

</style>