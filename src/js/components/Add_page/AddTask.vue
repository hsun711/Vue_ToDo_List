<template>
    <div id="addPage">
        <div id="addTask">
            <div class="task">
                <input id="task"
                    v-model="inputTask"
                    type="text"
                    name="task"
                    placeholder=" New Task "
                >
            </div>
            <div id="taskType">
                <form action="get">
                    <select id="type" v-model="taskType" name="type">
                        <option value="">
                            請選擇任務分類
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
            <date-picker v-model="expDate" placeholder="完成日期" value-type="format">
                {{ expDate }}
            </date-picker>
            <div>
                <input v-model="inputTag"
                    class="task"
                    type="text"
                    placeholder="請輸入備註"
                >
            </div>
            <i class="fa-regular fa-square-plus fa-2x" @click="addTask"></i>
        </div>
        <div class="taskArea">
            <ul>
                <li v-for="(item, index) in todoArr" :key="item.taskName">
                    <h3>{{ item.taskName }}</h3>
                    <p>{{ item.expDate }}</p>
                    <p>{{ item.taskTag }}</p>
                    <i class="fa-solid fa-trash-can" @click="removeTask(index)"></i>
                </li>
            </ul>
        </div>
        <div class="addtodoBtn">
            <button @click="sendTodos">
                送出
            </button>
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
            titleName: '',
            inputTask: '',
            inputTag: '',
            isChange: false,
            changeTask: '',
            taskType: '',
            expDate: '',
        };
    },
    computed: {
        ...mapGetters([]),
        todoArr(){
            return this.$store.state.addtodos;
        },
    },
    mounted(){},
    methods: {
        ...mapActions({}),
        ...mapMutations({}),
        addTask(){
            const taskid = uuidv4();
            if (this.inputTask === '') {
                Swal.fire('請輸入任務名稱');
                return;
            }
            if (this.taskType === '') {
                Swal.fire('請選擇任務分類');
                return;
            }
            if (this.expDate === '') {
                Swal.fire('請選擇到期日');
                return;
            }

            const data = {
                taskName: this.inputTask,
                taskType: this.taskType,
                expDate: this.expDate,
                isDone: false,
                id: taskid,
                taskTag: this.inputTag,
            };
            this.$store.commit('addTodo', data);
            this.inputTag = '';
            this.inputTask = '';
            this.taskType = '';
            this.expDate = '';
        },
        removeTask(index){
            this.todoArr.splice(index, 1);
        },

        sendTodos(){
            if (this.todoArr.length < 1) {
                Swal.fire('請輸入任務');
                return;
            }
            const oldTodos = JSON.parse(localStorage.get('todos'));
            oldTodos.push(...this.$store.state.addtodos);
            localStorage.set('todos', JSON.stringify(oldTodos));
            Swal.fire('已送出任務清單，可到 Todo page 查看');
            this.$store.state.addtodos = [];
        },
    },
};

</script>

<style>

</style>