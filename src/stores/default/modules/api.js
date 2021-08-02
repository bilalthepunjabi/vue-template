const endpoint = "http://localhost:8080";
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

const actions = {};
const mutations = {};
const getters = {};

const api = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

export default api;