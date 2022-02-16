import api from 'lib/api/index';
import { localStorage } from 'lib/common/util';

export default {
    initSystem({ commit }, params){
        commit('initSystem', params);
    },

    // getTodoLiast({ commit }, params){
    //     return new Promise((resolve, reject) => {
    //         api.getTodoList(params).success((response) => {
    //             commit('setTodoList', response);
    //         }).error((response) => {
    //             reject(response);
    //         });
    //     });
    // },

    getTodoList({ commit }){
        const tasks = JSON.parse(localStorage.get('todos'));
        commit('setTodoList', tasks);
    },
};