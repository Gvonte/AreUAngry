import login from "@/service/login.js";
import getUserInfo from "@/service/getUserInfo.js";

export default {
    state: {
        loginStatus: localStorage.getItem('token') ? true : false,
        userInfo: JSON.parse(localStorage.getItem('info')) || "",
    },
    mutations: {
        changeloginStatus(state, val) {
            state.loginStatus = val;
        },
        changeUserInfo(state, val) {
            state.userInfo = val;
        }
    },
    actions: {
        login({ commit }, loginInfo) {
            return login(loginInfo).then(async res => {
                if (res.data.success) {
                    localStorage.setItem('token', res.data.data.token);
                    commit('changeloginStatus', true);

                    let info = await getUserInfo();
                    console.log(info);
                    
                    const { id, username, money } = info.data.data.userInfo;
                    info = { id, username, money };
                    localStorage.setItem('info', JSON.stringify(info));
                    commit('changeUserInfo', info);
                }
                return res
            });
        },
        logout({ commit }) {
            localStorage.removeItem('token');
            commit('changeloginStatus', false);
            localStorage.removeItem('info');
            commit('changeUserInfo', "");
        }
    },
    getters: {
        userInfo: state => state.loginStatus ? localStorage.getItem('info') : ""
    }
}