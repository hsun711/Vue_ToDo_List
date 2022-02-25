<template>
    <div id="addPage">
        <h1>{{ this.$route.query.name === 'Add' ? "新增項目":"修改項目" }}：</h1>
        <div v-for="(item,index) in addList" :key="item.id" class="addTask" :class="type[`${item.taskType}`]">
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
            <i class="fa-solid fa-trash-can" @click="removeTask(index)"></i>
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
import { localStorage } from 'lib/common/util';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import { v4 as uuidv4 } from 'uuid';
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
        ...mapGetters(['itemsID']),
        addList(){
            let tasks = [];
            const typeName = !!this.$route.query.name ? this.$route.query.name: "";
            if(typeName === 'Add'){
                // console.log('Add');
                tasks = this.addTodoList;
            }else{
                const editTask = this.itemsID(this.$route.query.name);
                tasks = editTask;
            }

            return tasks;
        }
    },
    mounted(){
        if(this.addTodoList.length === 0){
            this.addTask();
        }
    },
    methods: {
        ...mapActions({}),
        ...mapMutations({}),
        addTask(){
            const taskid = uuidv4();
            const data = {
                taskName: this.inputTask,
                taskType: this.taskType,
                expDate: this.expDate,
                isDone: false,
                id: taskid,
                taskTag: this.inputTag,
            };
            
            this.addTodoList.push(data);
        },
        removeTask(index){
            this.addTodoList.splice(index, 1);
        },

        sendTodos(){
            if (this.addTodoList.taskName === '') {
                Swal.fire('請輸入任務名稱');
                return;
            }
            if (this.addTodoList.taskType === '') {
                Swal.fire('請選擇任務分類');
                return;
            }
            if (this.addTodoList.expDate === '') {
                Swal.fire('請選擇到期日');
                return;
            }
            
            const typeName = !!this.$route.query.name ? this.$route.query.name: "";
            if(typeName === 'Add'){
                const oldTodos = JSON.parse(localStorage.get('todos'));
                oldTodos.push(...this.addTodoList);
                localStorage.set('todos', JSON.stringify(oldTodos));
                Swal.fire('已送出任務清單，可到 Todo page 查看');
                this.addTodoList = [];
            }else{
                const id = this.$route.query.name;
                const formValues = this.addList;
                const data = {id, formValues}
                this.$store.commit('editTask', data);
                Swal.fire('修改完成');
            }
        },
    },
};

</script>

<style>

</style>