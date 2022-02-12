export default {
    config: state => state.config,

    PageSetting_width: state => state.PageSetting_width,
    PageSetting_mode_type: state => state.PageSetting_mode_type,

    todos: state => state.todos,
    todos_done: (state) =>{
        return state.todos.filter((item) => {
            return item.done === true;
        });
    },

    lang: state => state.lang,
};