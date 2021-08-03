import axios from 'axios';

const endpoint = "https://9aeab451a91e.ngrok.io/api/";
//default storage of module 'api'
const state = {
    auth: {
        base_endpoint: endpoint,
        token: '',
        name: 'Authorization',
        type: 'Bearer ',
        status: false,
        headers: {
            'Authorization': '',
            'Access-Control-Allow-Credentials': true,
            'Accept': 'application/json'
        },
        user: {},
        xios: {} //this is the copy of axios but have pre-built headers with token use this as axios
    },
};

const actions = {
    async authin(context, value) {
        let response = await axios.post(context.state.auth.base_endpoint + "login", value);
        if (response.data.code === 200) {
            context.commit("SET_AUTH", response.data);
            return true;
        } else {
            return response;
        }
    }
};
const mutations = {
    SET_AUTH(state, payload) {
        state.auth.status = true;
        state.auth.token = payload.data.token;
        state.auth.headers['Authorization'] = state.auth.type + ' ' + state.auth.token;
        state.auth.xios = axios.create({
            baseURL: state.auth.base_endpoint,
            withCredentials: true,
            headers: state.auth.headers
        });
        state.auth.user = payload.data.user;
    },
};
const getters = {};

const api = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

export default api;