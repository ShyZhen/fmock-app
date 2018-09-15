<template>
    <div class="post-container">
        <li v-for="post in posts.data" :key="post.id">
            <router-link :to="{ path: '/post/' + post.uuid }">
                <p>{{ post }}</p>
            </router-link>
        </li>
    </div>
</template>

<script>
    export default {
        name: 'post-container',
        props: ['posts'],
    }
</script>

<style scoped>
    .post-container {
        padding: 20px;
    }
</style>