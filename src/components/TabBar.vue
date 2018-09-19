<template>
    <div class="tab-bar">
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="/index">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shouye"></use>
                </svg>
                <p>首页</p>
            </mt-tab-item>
            <mt-tab-item id="/follow">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guanzhu1-copy"></use>
                </svg>
                <p>关注</p>
            </mt-tab-item>
            <mt-tab-item id="/write">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiewenzhang"></use>
                </svg>
                <p>写文章</p>
            </mt-tab-item>
            <mt-tab-item id="/mime">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wode1-copy"></use>
                </svg>
                <p>我</p>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Tabbar, TabItem } from 'mint-ui';

    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabItem.name, TabItem);

    export default {
        name: 'tab-bar',
        data () {
            return {
                selected: 'home',
            }
        },
        updated() {
            this.$router.push(this.selected)
        }
    }
</script>