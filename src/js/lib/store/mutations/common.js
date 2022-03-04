import Vue from 'vue';
import { localStorage } from 'lib/common/util';
import { v4 as uuidv4 } from 'uuid';

export default {
    SetPageSetting(state, params){
        for (const key in params) {
            state[`PageSetting_${key}`] = params[key];
        }
    },
    CheckAdBlock(state, data){
        state.adBlocked = data;
    },

    setLang(state, data){
        state.lang = data;
    },

    setTodoList(state, todos){
        state.todos = todos;
    },

    addTodo(state, tasks){
        state.addtodos.push(tasks);
    },

    removeTask(state, payload){
        state.todos.splice(state.todos.indexOf(...payload), 1);
        localStorage.set('todos', JSON.stringify(state.todos));
    },

    editTodoList(state, payload){
        state.editTodoList = payload;
    },

    editTask(state, payload){
        const task = [];
        const todos = JSON.parse(JSON.stringify(state.todos));
        const todoObj = {};

        todos.forEach((item) => {
            todoObj[item.id] = item;
        });

        payload.forEach((item) => {
            if (item.id === '') {
                task.push(item);
            } else {
                todoObj[item.id] = item;
            }
        });

        const editTask = Object.values(todoObj);

        const newTodo = task.map((item) => {
            const taskList = JSON.parse(JSON.stringify(item));
            const taskid = uuidv4();
            taskList.id = taskid;
            return taskList;
        });

        const data = editTask.concat(newTodo);
        localStorage.set('todos', JSON.stringify(data));
        state.todos = todos;
    },

    chooseTag(state, tag){
        const selectTag = JSON.parse(JSON.stringify(state.selectTag));
        const idx = selectTag.indexOf(tag);
        if (idx !== -1) {
            selectTag.splice(idx, 1);
        } else {
            selectTag.push(tag);
        }
        state.selectTag = selectTag;
    },

};