<template>
    <div id="addPage">
        <h1>新增項目</h1>
        <div class="addTask">
            <div class="task">
                <label for="task">項目名稱：</label>
                <input id="task"
                    v-model="inputTask"
                    type="text"
                    name="task"
                    placeholder=" New Task "
                >
            </div>
            <div class="taskType">
                <form action="get">
                    <span>任務分類：</span>
                    <select id="type" v-model="taskType" name="type">
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
                <date-picker v-model="expDate" placeholder="完成日期" value-type="format" class="datePicker">
                    {{ expDate }}
                </date-picker>
            </div>
            <div class="taskTag">
                <label for="tag">任務備註：</label>
                <input id="tag"
                    v-model="inputTag"
                    class="task"
                    type="text"
                    placeholder="請輸入備註"
                >
            </div>
        </div>
        <div class="addtodoBtn">
            <div class="addBtn" @click="addTask">
                新增一筆
            </div>
            <div class="saveBtn" @click="sendTodos">
                儲存
            </div>
        </div>
        <div v-for="(item,index) in todoArr" :key="item.id" class="addTask" :class="type[`${item.taskType}`]">
            <div class="task">
                <label for="task">項目名稱：</label>
                <input id="task"
                    v-model="item.taskName"
                    type="text"
                    name="task"
                    placeholder="`${item.taskName}`"
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
                    placeholder="`${item.taskTag}`"
                >
            </div>
            <i class="fa-solid fa-trash-can" @click="removeTask(index)"></i>
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
                isEdit: false,
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
            if (this.$store.state.addtodos.length < 1) {
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