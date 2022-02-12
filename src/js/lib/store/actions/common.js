import api from 'lib/api/index';

export default {
    initSystem({ commit }, params){
        commit('initSystem', params);
    },

    getTodoLiast({ commit }, params){
        return new Promise((resolve, reject) => {
            api.getTodoList(params).success((response) => {
                commit('setTodoList', response);
            }).error((response) => {
                reject(response);
            });
        });
    },
};