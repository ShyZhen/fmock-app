/**
 * 全局变量
 * @type {string}
 */
import Common from '../assets/js/common'
// import store from '../store/index'

const config = {
    API_BASE_URL: 'http://api.fmock.com/api/V1',
    ACCEPT: 'application/json',
    // 获取本地存储的token
    getAuthToken: function () {
        // return store.getters.getLocalUserToken
        return Common.getLocalUserToken("fmock-token")
    }
};

export default config

