import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from '../../src/global/env.js'
import Common from '../assets/js/common'

Vue.use(VueAxios, axios);

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    Common.indicator.open();
    config.baseURL = env.API_BASE_URL;
    config.headers.common.Accept = env.ACCEPT;
    config.headers.common.Authorization = env.getAuthToken();
    return config;
}, function (error) {
    Common.indicator.close();
    Common.redirect('糟糕！您的网络貌似有问题', '/login', 2000);
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    console.log('success response');
    Common.indicator.close();
    return response;
}, function (error) {
    console.log('error response');
    console.log(error.response);
    Common.indicator.close();
    Common.redirect('坏了！服务器可能崩溃了', '/login', 2000);
    return Promise.reject(error);
});
