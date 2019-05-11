const getters = {
    getLocalUserToken: state => state.localUserToken === null ? '' : state.localUserToken,

    isAuthorization: state => state.isAuthorization,
    userInfo: state => !state.userInfo ? localStorage.getItem('fmock-user-info') : state.userInfo,
};

export default getters;