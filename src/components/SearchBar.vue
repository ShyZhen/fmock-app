<template>
    <div class="search-bar">
        <mt-search v-model="searchValue"></mt-search>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Search } from 'mint-ui';

    Vue.component(Search.name, Search);

    export default {
        name: 'search-bar',
        data () {
            return {
                searchValue: ''
            }
        }
    }
</script>

<style scoped>
    .search-bar {
        height: 60px;
    }
</style>