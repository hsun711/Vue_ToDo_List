import api from 'lib/api/index';
import { localStorage } from 'lib/common/util';

export default {
    initSystem({ commit }, params){
        commit('initSystem', params);
    },

    getTodoList({ commit }){
        const tasks = JSON.parse(localStorage.get('todos'));
        commit('setTodoList', tasks);
    },
};