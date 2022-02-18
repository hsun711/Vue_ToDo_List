export default {
    config: state => state.config,

    PageSetting_width: state => state.PageSetting_width,
    PageSetting_mode_type: state => state.PageSetting_mode_type,


    itemsNotDone(state){
        return state.todos.filter(item => item.isDone === false);
    },

    itemsDone(state){
        return state.todos.filter(item => item.isDone === true);
    },

    itemsID(state){
        return id => state.todos.filter(item => item.id === id);
    },

    otherItemsID(state){
        return (id) => {
            const result = state.todos.filter((item) => {
                const other = item.id === id;
                return !other;
            });
            return result;
        };
    },

    expAlert(state){
        const date = new Date();
        const today = date.toISOString().slice(0, 10);
        return state.todos.filter(item => item.expDate === today);
    },

};