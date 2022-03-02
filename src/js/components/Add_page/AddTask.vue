<template>
    <div id="addPage">
        <h1>{{ this.$route.query.name === 'Add' ? "新增項目":"修改項目" }}：</h1>
        <div v-for="(item,index) in addTodoList" :key="index" class="addTask" :class="type[`${item.taskType}`]">
            <div class="taskState" v-if="route">
                <h6 :class="[item.isDone === true ? 'ok':'notyet']">項目狀態：{{ item.isDone === true ? '已完成' : '未完成' }}</h6>
            </div>
            <div class="task">
                <label for="task">項目名稱：</label>
                <input id="task"
                    v-model="item.taskName"
                    type="text"
                    name="task"
                >
            </div>
            <div class="taskType">
                <form action="get">
                    <span>任務分類：</span>
                    <select id="type" v-model="item.taskType" name="type">
                        <option value="">
                            請選擇
                        </option>
                        <option value="work">
                            工作
                        </option>
                        <option value="home">
                            家事
                        </option>
                        <option value="friend">
                            社交
                        </option>
                        <option value="other">
                            其他
                        </option>
                    </select>
                </form>
            </div>
            <div class="taskDate">
                <span>完成日期：</span>
                <date-picker v-model="item.expDate"
                    placeholder="完成日期"
                    value-type="format"
                    class="datePicker"
                >
                    {{ `${item.expDate}` }}
                </date-picker>
            </div>
            <div class="taskTag">
                <label for="tag">任務備註：</label>
                <input id="tag"
                    v-model="item.taskTag"
                    class="task"
                    type="text"
                >
            </div>
            <div class="trashCan">
                <i class="fa-solid fa-trash-can" @click="removeTask(index)"></i>
            </div>
        </div>
        <div class="addtodoBtn">
            <div class="addBtn" @click="addTask" v-if="this.$route.query.name === 'Add'">
                新增一筆
            </div>
            <div class="saveBtn" @click="sendTodos">
                儲存
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import Swal from 'sweetalert2';

export default {
    components: {
        DatePicker,
    },
    filters: {},
    props: {},
    data(){
        return {
            inputTask: '',
            inputTag: '',
            taskType: '',
            expDate: '',
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
    computed: {
        ...mapGetters(['itemsID','todos']),
    },
    mounted(){
        const typeName = this.$route.query.name;
        if (typeName !== 'Add') {
            this.route = true;
            const todos = JSON.parse(JSON.stringify(this.todos));
            const editTask = todos.filter((todo) => {
                return todo.id === this.$route.query.name;
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
                taskName: this.inputTask,
                taskType: this.taskType,
                expDate: this.expDate,
                isDone: false,
                id: '',
                taskTag: this.inputTag,
            };
            
            this.addTodoList.push(data);
        },
        removeTask(index){
            const typeName = this.$route.query.name;
            if(typeName === 'Add'){
                this.addTodoList.splice(index, 1);
            }else{
                const editTask = this.itemsID(typeName);
                this.$store.commit('removeTask', editTask);
                history.go(-1);
            }
        },

        sendTodos(){
            const typeName = this.$route.query.name;

            this.addTodoList.forEach((item) => {
                if(item.taskName === ''){
                    Swal.fire('請輸入任務名稱');
                    return;
                }
                if(item.taskType === ''){
                    Swal.fire('請選擇任務分類');
                    return;
                }
                if(item.expDate === ''){
                    Swal.fire('請選擇完成日期');
                    return;
                }
                if(item.taskTag === ''){
                    Swal.fire('請輸入任務備註');
                    return;
                } else {
                    this.$store.commit('editTask', [ ...this.addTodoList,]);
                    if(typeName === 'Add'){
                        Swal.fire('已送出，可到 Todo page 查看');
                        this.addTodoList = [];
                    } else {
                        Swal.fire({
                            position: 'center-center',
                            icon: 'success',
                            title: '修改完成',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        history.go(-1);
                    }
                }
            })
        },
    },
};

</script>

<style>

</style>