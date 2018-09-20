// 配置 v-resource
import Vue from 'vue'
import env from '../../src/global/env.js'
import Common from '../assets/js/common'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.interceptors.push(function (request, next) {
    Common.indicator.open();
    request.root = env.API_BASE_URL;
    request.headers.set('Accept', env.ACCEPT);
    request.headers.set('Authorization', env.getAuthToken());
    next(function (response) {
        Common.indicator.close();
        // 0 是后台路由保护认证失败返回401，由于cors问题判断为0
        if (response.status === 0) {
            Common.redirectLogin('糟糕！Token过期了，重新登录试试', '/login', 2000)
        }
    })
});