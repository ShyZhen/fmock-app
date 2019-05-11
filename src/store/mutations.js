const mutations = {
    setLocalUserToken(state, token) {
        state.localUserToken = token;
        localStorage.setItem('fmock-token', token)
    },
    removeLocalUserToken(state) {
        state.localUserToken = '';
        localStorage.setItem('fmock-token', '')
    },
    setLoginState(state, isAuthorization) {
        state.isAuthorization = isAuthorization
    },
    setUserInfo(state, userInfo) {
        state.userInfo = userInfo
    },
    removeUserInfo(state) {
        state.userInfo = ''
    }
};

export default mutations;
