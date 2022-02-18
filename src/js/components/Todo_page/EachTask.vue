<template>
    <div id="eachTask">
        <div class="taskTitle">
            <div class="menuicon" style="font-size: 2rem;">
                <i v-show="isShow" class="fa-regular fa-square-caret-down" @click="handleShow"></i>
                <i v-show="!isShow" class="fa-regular fa-square-caret-up" @click="handleShow"></i>
            </div>
            <h1>{{ this.$route.query.name }} Tasks:</h1>
        </div>
        {{ taskAlert }}
        <ul class="taskList">
            <li v-for="item in taskisdone[0]" v-show="isShow" :key="item.taskName">
                <div class="checked">
                    <div :class="type[`${item.taskType}`]">
                        <h4 @click="turnDone(item.id)">
                            {{ item.taskName }}
                        </h4>
                    </div>
                    <div class="editDate">
                        <p>{{ item.expDate }}</p>
                        <i class="fa-solid fa-pen" v-if="isDone" @click="editTask(item.id)"></i>
                        <i class="fa-solid fa-trash-can" v-if="!isDone" @click="removeTask(item.id)"></i>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { localStorage } from 'lib/common/util';
import Swal from 'sweetalert2';

export default {
    data(){
        return {
            isShow: true,
            isDone: false,
            isExp: false,
            type: {
                work: 'editText work',
                home: 'editText home',
                friend: 'editText friend',
                other: 'editText other',
            }
        };
    },
    computed: {
        ...mapGetters(['itemsID', 'otherItemsID','expAlert']),
        taskisdone(){
            let tasks = [];
            switch (this.$route.query.name) {
                case 'Todo':
                    tasks.push(this.$store.getters['itemsNotDone'])
                    this.isDone = true;
                    break;
                case 'Done':
                    tasks.push(this.$store.getters['itemsDone'])
                    this.isDone = false;
                    break;
                default:
                    break;
            }
            return tasks;
        },
        taskAlert(){
           console.log(this.expAlert);
           console.log(this.$store.getters['itemsNotDone']);
        },
    },
    mounted(){
        this.getTodoList();
    },
    methods: {
        ...mapActions({
            getTodoList: 'getTodoList',
        }),
        ...mapMutations({}),
        handleShow(){
            this.isShow = !this.isShow;
        },
        turnDone(id){
            const itemid = this.itemsID(id);
            itemid[0].isDone = true;
            const newTaskArr = [...this.otherItemsID(id), ...itemid];
            localStorage.set('todos', JSON.stringify(newTaskArr));
        },

        async editTask(id){ 
            const { value: formValues } = await Swal.fire({
                title: '輸入任務名稱及日期',
                html:
                    '<input id="swal-input1" class="swal2-input" placeholder="任務名稱">'+
                    '<input type="date" id="datepick" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    return {
                        task: document.getElementById('swal-input1').value,
                        date: document.getElementById('datepick').value
                    }
                }
            })

            const data = {id, formValues}
            this.$store.commit('editTask', data)
        },

        removeTask(id){
            const itemID = this.itemsID(id);
            this.$store.commit('removeTask', itemID)
        },
    },
};
</script>
<style lang="scss" scoped>
</style>