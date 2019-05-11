/**
*  通用js
**/
import Vue from 'vue';
import router from '../../router/index';
import store from '../../store/index'
import { Toast, Indicator } from 'mint-ui';

function getLocalUserToken(index) {
    return localStorage.getItem(index)
}

function setLocalUserToken(index, value) {
    return localStorage.setItem(index, value)
}

function clearLocalUserToken(index) {
    return localStorage.removeItem(index)
}

// 加载动画
const indicator = {
    open: function (message = '', spinnerType = 'snake') {
        Indicator.open({
            text: message,
            spinnerType: spinnerType
        });
    },
    close: function () {
        Indicator.close();
    }
};

// 弹出消息并重定向
function redirect(message, redirectPath, duration) {
    let instance = Toast({
        message: message,
        position: 'middle',
    });
    setTimeout(() => {
        instance.close();
        router.push(redirectPath);
    }, duration);
}

// 检查是否登录，将用户信息存储到本地和vuex
function checkLogin() {
    let token = getLocalUserToken("fmock-token");
    let userInfo = getLocalUserToken("fmock-user-info");
    if (!token || !userInfo){
        redirect('抱歉您还未登陆', '/login', 2000);
        return false
    } else {
        return true
    }
}

export default {
    getLocalUserToken,
    setLocalUserToken,
    clearLocalUserToken,
    redirect,
    checkLogin,
    indicator,
}