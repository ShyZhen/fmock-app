<template>
    <div>
        <header-bar :title="title" :pre-page="prePage"></header-bar>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import HeaderBar from '../components/HeaderBar'
    import TabBar from '../components/TabBar'

    export default {
        name: 'Index',
        data () {
            return {
                title: '发声',
                prePage: '/'
            }
        },
        components: {
            HeaderBar,
            TabBar,
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

