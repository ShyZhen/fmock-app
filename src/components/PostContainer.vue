<template>
    <div class="post-container">
        <div v-if="Object.keys(post).length">
            <li :key="post.id">
                <p>{{ post }}</p>
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
        name: 'post-container',
        props: ['post'],
    }
</script>

<style scoped>

</style>