/**
 * 全局变量
 * @type {string}
 */

const API_BASE_URL = 'http://localhost:82/api/V1';

const VUE_RESOURCE_OPTION = {
    root: API_BASE_URL,
    headers: {
        Accept: 'application/json',
        Authorization: getAuthToken()
    },
};

export default {
    API_BASE_URL,
    VUE_RESOURCE_OPTION,
}

// 获取本地存储的token
function getAuthToken () {
    return localStorage.getItem("fmock-token")
}