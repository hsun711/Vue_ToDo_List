<template>
    <div id="eachTask">
        <div class="taskTitle">
            <div class="menuicon" style="font-size: 2rem;">
                <i v-show="isShow" class="fa-regular fa-square-caret-down" @click="handleShow"></i>
                <i v-show="!isShow" class="fa-regular fa-square-caret-up" @click="handleShow"></i>
            </div>
            <h1>{{ this.$route.query.name }} Tasks: </h1>
        </div>
        <ul class="taskList">
            <li v-for="item in taskisdone[0]" v-show="isShow" :key="item.taskName">
                <div class="checked">
                    <div class="editText">
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
import DatePicker from 'vue2-datepicker';
import { localStorage } from 'lib/common/util';
import Swal from 'sweetalert2';

export default {
    components: {
        DatePicker
    },
    filters: {},
    props: {},
    data(){
        return {
            taskName: '',
            isShow: true,
            isDone: false,
            doneTask:[],
            tasksArr: [],
        };
    },
    computed: {
        ...mapGetters([
        ]),
        taskisdone(){
            let tasks = [];
            switch (this.$route.query.name) {
                case 'Todo':
                    this.tasksArr.filter((items) => {
                        const result = items.filter(item => item.isDone === false);
                        tasks.push(result);
                    });
                    this.isDone = true;
                    break;
                case 'Done':
                    this.tasksArr.filter((items) => {
                        const result = items.filter(item => item.isDone === true);
                        tasks.push(result);
                    });
                    this.isDone = false;
                    break;
                default:
                    break;
            }
            return tasks;
        },
    },
    watch: {
    },
    created(){},
    mounted(){
        const tasks = JSON.parse(localStorage.get('todos'));
        this.tasksArr.push(tasks);
    },
    updated(){},
    destroyed(){},
    methods: {
        ...mapActions({}),
        ...mapMutations({}),
        handleShow(){
            this.isShow = !this.isShow;
        },
        turnDone(id){
            const task = this.tasksArr.filter((items) => {
                const result = items.filter((item) => {
                    return item.id === id;
                })
                result[0].isDone = true;
                return result;
            })

            localStorage.set('todos', JSON.stringify(task[0]));
        },
        async editTask(id){
            
            const { value: formValues } = await Swal.fire({
                title: '輸入任務名稱及日期',
                html:
                    '<input id="swal-input1" class="swal2-input" placeholder="任務名稱">'+
                    '<input id="swal-input2" class="swal2-input" placeholder="完成日期">',
                focusConfirm: false,
                preConfirm: () => {
                    return [
                        document.getElementById('swal-input1').value,
                        document.getElementById('swal-input2').value
                    ]
                }
            })
            
            if(formValues[0] === '') {
                const newTask = this.tasksArr.filter((items) => {
                    const result = items.filter((item) => {
                        return item.id === id;
                    })
                    result[0].expDate = formValues[1];
                    return result;
                    })
                localStorage.set('todos', JSON.stringify(newTask[0]));
            }else if(formValues[1] === '') {
                const newTask = this.tasksArr.filter((items) => {
                    const result = items.filter((item) => {
                        return item.id === id;
                    })
                    result[0].taskName = formValues[0];
                    return result;
                    })
                localStorage.set('todos', JSON.stringify(newTask[0]));
            }else{
                const newTask = this.tasksArr.filter((items) => {
                    const result = items.filter((item) => {
                        return item.id === id;
                    })
                    result[0].taskName = formValues[0];
                    result[0].expDate = formValues[1];
                    return result;
                })
                localStorage.set('todos', JSON.stringify(newTask[0]));
            }
            // if(task === ''){
            //     Swal.fire('請輸入任務名稱');
            // } else {
            //     const newTask = this.tasksArr.filter((items) => {
            //         const result = items.filter((item) => {
            //             return item.id === id;
            //         })
            //         result[0].taskName = task;
            //         return result;
            //         })
            //     localStorage.set('todos', JSON.stringify(newTask[0]));
            // }

        },
        removeTask(id){
            const newTask = this.tasksArr.filter((items) => {
                const result = items.filter((item) => {
                    return item.id === id;
                })
                this.tasksArr[0].splice(this.tasksArr[0].indexOf(result[0]),1)
                return result;
            })
            localStorage.set('todos', JSON.stringify(newTask[0]));
        },
    },
};
</script>
<style lang="scss" scoped>
</style>