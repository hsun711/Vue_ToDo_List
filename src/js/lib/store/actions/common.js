import api from 'lib/api/index';
import { localStorage } from 'lib/common/util';

export default {
    initSystem({ commit }, params){
        commit('initSystem', params);
    },

    getTodoList({ commit }){
        return new Promise((resolve, reject) => {
            const tasks = JSON.parse(localStorage.get('todos'));
            commit('setTodoList', tasks);
            resolve();
        });
    },
};