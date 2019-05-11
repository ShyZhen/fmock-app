/**
 * 提交mutations
 *
 * @type {{setLocalUserToken({commit: *}, *=): void}}
 */

const actions = {
    setLocalUserToken({ commit }, token) {
        commit('setLocalUserToken', token)
    },
    removeLocalUserToken({ commit }) {
        commit('removeLocalUserToken')
    },
    setLoginState({ commit }, boolean) {
        commit('setLoginState', boolean);
    },


    setUserInfo({ commit }, userInfo) {
        commit('setUserInfo', userInfo)
    },
    removeUserInfo({ commit }) {
        commit('removeUserInfo')
    }
};

export default actions;
