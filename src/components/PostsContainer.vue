<template>
    <div class="posts-container">
        <div v-if="posts.total">
            <li v-for="post in posts.data" :key="post.id">
                <router-link :to="{ path: '/user/' + post.userinfo.uuid }">
                    <p>{{ post.userinfo }}</p>
                </router-link>
                <router-link :to="{ path: '/post/' + post.uuid }">
                    <p>{{ post.content }}</p>
                </router-link>
                <hr>
            </li>
        </div>
        <div v-else>
            <li>
                <p>暂无数据</p>
            </li>
        </div>
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