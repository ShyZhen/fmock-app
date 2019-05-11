<template>
    <div class="tab-bar">
        <!--<mt-tabbar fixed v-model="selected">-->
            <!--<mt-tab-item id="index">-->
                <!--<svg class="icon">-->
                    <!--<use xlink:href="#icon-shouye"></use>-->
                <!--</svg>-->
                <!--<p>首页</p>-->
            <!--</mt-tab-item>-->
            <!--<mt-tab-item id="follow">-->
                <!--<svg class="icon">-->
                    <!--<use xlink:href="#icon-guanzhu1-copy"></use>-->
                <!--</svg>-->
                <!--<p>关注</p>-->
            <!--</mt-tab-item>-->
            <!--<mt-tab-item id="write">-->
                <!--<svg class="icon">-->
                    <!--<use xlink:href="#icon-xiewenzhang"></use>-->
                <!--</svg>-->
                <!--<p>写文章</p>-->
            <!--</mt-tab-item>-->
            <!--<mt-tab-item id="mime">-->
                <!--<svg class="icon">-->
                    <!--<use xlink:href="#icon-wode1-copy"></use>-->
                <!--</svg>-->
                <!--<p>我</p>-->
            <!--</mt-tab-item>-->
        <!--</mt-tabbar>-->

        <router-link to="/index" active-class="on">
            <svg class="icon">
                <use :xlink:href="change('/index') ? '#icon-shouye' : '#icon-shouye-copy'"></use>
            </svg>
            <p>首页</p>
        </router-link>
        <router-link to="/follow" active-class="on">
            <svg class="icon">
                <use :xlink:href="change('/follow') ? '#icon-guanzhu1-copy' : '#icon-guanzhu1-copy-copy'"></use>
            </svg>
            <p>关注</p>
        </router-link>
        <router-link to="/write" active-class="on">
            <svg class="icon">
                <use :xlink:href="change('/write') ? '#icon-xiewenzhang' : '#icon-xiewenzhang-copy'"></use>
            </svg>
            <p>写文章</p>
        </router-link>
        <router-link to="/mime" active-class="on">
            <svg class="icon">
                <use :xlink:href="change('/mime') ? '#icon-wode1-copy' : '#icon-wode1-copy-copy'"></use>
            </svg>
            <p>我</p>
        </router-link>


    </div>
</template>

<script>
    export default {
        name: 'tab-bar',
        data () {
            return {
            }
        },
        methods: {
            change: function (type) {
                return this.$route.path === type;
            },
        }
    }
</script>

<style scoped>
    .tab-bar {
        width: 100%;
        border-top: 1px solid #eaeaea;
        font-size: 12px;
        background-color: #fafafa;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        text-align: center;
        right: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        z-index: 1;
        padding: 10px 0 10px 0;
    }
    .tab-bar a {
        width: 25%;
        color: #a9a9a9;
    }
    .tab-bar a.on  {
        color: #FFCD36;
    }
</style>