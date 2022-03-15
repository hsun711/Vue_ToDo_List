<template>
    <div id="addPage">
        <h1>{{ this.routeName === 'Add' ? "新增項目":"修改項目" }}：</h1>
        <div v-for="(item,index) in addTodoList" :key="index" class="addTask" :class="type[`${item.taskType}`]">
            <div class="taskState" v-if="route">
                <h6 :class="[item.isDone === true ? 'ok':'notyet']">項目狀態：{{ item.isDone === true ? '已完成' : '未完成' }}</h6>
            </div>
            <AddTask :item="item" :index="index" @remove="removeTodo" @change-item="changeItem" />
        </div>
        <div class="addtodoBtn">
            <div class="addBtn" @click="addTask" v-if="this.routeName === 'Add'">
                新增一筆
            </div>
            <div class="saveBtn" @click="sendTodos">
                儲存
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex';
import Swal from 'sweetalert2';
import AddTask from './AddTask.vue'

export default {
    components: {
        AddTask,
    },
    filters: {},
    props: {},
    data(){
        return {
            routeName: this.$route.query.name,
            isInputChange: false,
            route: false,
            type: {
                work: 'work',
                home: 'home',
                friend: 'friend',
                other: 'other',
            },
            addTodoList: [],
        };
    },
    watch:{},
    computed: {
        ...mapGetters(['itemsID','todos','itemsNotDone']),
        ...mapState(['editTodoList']),
    },
    mounted(){
        if(this.routeName !== 'Add' && this.routeName === 'edit'){
            const todos = JSON.parse(JSON.stringify(this.itemsNotDone));
            const editTodoList = JSON.parse(JSON.stringify(this.editTodoList));
            const arr = [];

            todos.forEach((todo) => {
               if(editTodoList.includes(todo.id)){
                   arr.push(todo);
               }
            });

            this.addTodoList = arr;
        }
        else if (this.routeName !== 'Add') {
            this.route = true;
            const todos = JSON.parse(JSON.stringify(this.todos));
            const editTask = todos.filter((todo) => {
                return todo.id === this.routeName;
            })    
            this.addTodoList = editTask;         
        } else{
            this.addTask();
        }
    },
    methods: {
        ...mapActions({}),
        ...mapMutations({
            editTask: 'editTask',
        }),

        addTask(){
            const data = {
                taskName: '',
                taskType: '',
                expDate: '',
                isDone: false,
                id: '',
                taskTag: '',
            };
            
            this.addTodoList.push(data);
        },
        removeTodo(item){
            const todoList = JSON.parse(JSON.stringify(this.addTodoList))

            if(this.routeName !== 'Add' && this.routeName === 'edit'){

                const editTodoList = JSON.parse(JSON.stringify(this.editTodoList));
                const taskId = [];
                const index = editTodoList.indexOf(item.item.id)

                taskId.push(editTodoList[index]);

                todoList.splice(item.index, 1);
                this.addTodoList = todoList;
                this.$store.commit('removeTask', taskId);
            }
            else if(this.routeName === 'Add'){
                todoList.splice(item.index, 1);
                this.addTodoList = todoList;
            } else {
                const editTask = [];
                editTask.push(this.routeName)
                this.$store.commit('removeTask', editTask);
                this.isInputChange = false;
                this.$emit('input-data-change',this.isInputChange)
                history.go(-1);
            }
        },

        sendTodos(){
            const checkTask = this.addTodoList.every((todo) => {
                if(todo.taskName === ''){
                    Swal.fire('請輸入任務名稱');
                    return;
                }
                if(todo.taskType === ''){
                    Swal.fire('請選擇任務分類');
                    return;
                }
                if(todo.expDate === ''){
                    Swal.fire('請選擇完成日期');
                    return;
                }
                if(todo.taskTag === ''){
                    Swal.fire('請輸入任務備註');
                    return;
                } else {
                    return todo;
                }
            })

            if(checkTask === true){
                this.isInputChange = false;
                this.$emit('input-data-change',this.isInputChange);
                this.$store.commit('editTask', [ ...this.addTodoList,]);
                if(this.routeName === 'Add'){
                    Swal.fire('已送出，可到 Todo page 查看');
                    this.addTodoList = [];
                } else {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: '修改完成',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    history.go(-1);
                }
            }
        },
        changeItem(item){
            let todoList = JSON.parse(JSON.stringify(this.addTodoList));
            if(item.dataChange === true){
                if(item.item.id === ''){
                    todoList[item.index] = item.item;
                    this.addTodoList = todoList;
                    this.isInputChange = true;
                    this.$emit('input-data-change',this.isInputChange)

                } else {
                    const todoObj = {};
                    todoList.forEach((item) => {
                        todoObj[item.id] = item;
                    });

                    todoObj[item.item.id] = item.item;

                    const editTask = Object.values(todoObj);
                    this.addTodoList = editTask;

                    this.isInputChange = true;
                    this.$emit('input-data-change',this.isInputChange);
                }
            } else {
                this.isInputChange = false;
                this.$emit('input-data-change',this.isInputChange)
            }
            
        },

    },
};

</script>

<style>

</style>