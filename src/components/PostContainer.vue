<template>
    <div class="post-container">
        <!--<div class="ql-container ql-snow">-->
            <!--<div class="ql-editor">-->
                <div v-if="Object.keys(post).length">
                    <li class="post-item" :key="post.id">
                        <p>{{ post.user_info.username }}</p>
                        <p>{{ post.user_info.bio }}</p>
                        <img :src="post.user_info.avatar" alt="">
                        <p>{{ post.title }}</p>
                        <p v-html="post.content"></p>
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
        name: 'post-container',
        props: ['post'],
    }
</script>

<style scoped>

</style>