<template>
    <div id="eachTask">
        <div class="titleMenu">
            <h1>{{ this.$route.query.name === 'Done' ? "完成項目":"待辦項目" }} : </h1>
            <div class="multiEdit" v-if="taskList.length > 0">
                <div @click="openMultiEditMenu">
                    <i class="barIcon fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div :class="[this.isOpen ? 'active' : 'editBtn']">
                    <div class="active-item" @click="chooseItem" v-if="this.$route.query.name !== 'Done'">
                        <i class="fa-solid fa-pen"></i> 編輯多個項目
                    </div>
                    <div class="active-item" @click="chooseItem" v-if="this.$route.query.name === 'Done'">
                        <i class="fa-solid fa-trash-can"></i> 刪除多個項目
                    </div>
                </div>
            </div>
        </div> 
        <div class="itemTag">
            <ul>
                <li v-for="item in formatItemTag" 
                    :key="item.tagName" 
                    :class="{'active': item.isActive}"
                    class="tagArr"
                    @click="changeTag(item)">
                    {{ item.tagName }}
                </li>
            </ul>
        </div>
        <div class="taskList">
           <ul id="infiniteList">
                <li v-for="item in taskList" v-show="isShow && item.isTag" :key="item.id">
                    <input type="checkbox" :value="item.id" v-model="checkItem" name="checkInput" class="checkitem" v-if="isCheck">
                    <div class="checked" :class="type[`${item.taskType}`]">
                        <div class="taskText">
                            <div class="taskTitle">
                                <h4 @click="turnDone(item.id)" :class="{'exp': item.isToday, 'doneStyle': item.isDone}">
                                    {{ item.taskName }}
                                </h4>
                                <h6 v-if="item.time < now - 86400000 && item.isDone === false" style="color: red">
                                    做完了沒～已經過期囉！
                                </h6>
                            </div>
                            <div class="itemTag">
                                <ul>
                                    <li v-for="(item, idx) in item.taskTag" :key="idx" :class="{'active': selectTag.includes(item)}">
                                        {{item}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="editArea">
                            <p>{{ item.expDate }}</p>
                            <div class="editMenu">
                                <div class="dotMenu" @click="openMenu(item)">
                                    <i class="icon fa-solid fa-ellipsis-vertical fa-xl"></i>
                                </div>
                                <div :class="[item.id === itemid ? 'active' : 'editBtn']">                                    
                                    <router-link class="active-item" :to="{ name: 'Add_page', query:{ name: item.id }}">
                                        <i class="fa-solid fa-pen"></i> 編輯
                                    </router-link>
                                    <div class="active-item" @click="removeTask(item.id)">
                                        <i class="fa-solid fa-trash-can"></i> 刪除
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul> 
        </div>

        <div class="addtodoBtn">
            <div class="cancleBtn" @click="cancle" v-if="isCheck">
                取消
            </div>
            <div class="addBtn" v-if="isCheck" @click="submit">
                選擇
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { localStorage } from 'lib/common/util';
import Swal from 'sweetalert2';

export default {
    data(){
        return {
            isShow: true,
            isExp: false,
            itemid:'',
            isOpen: false,
            isCheck: false,
            now: moment().valueOf(),
            checkItem: [],
            type: {
                work: 'work',
                home: 'home',
                friend: 'friend',
                other: 'other',
            },
        };
    },
    watch:{},
    computed: {
        ...mapGetters(['itemsID', 'otherItemsID', 'itemsNotDone', 'itemsDone', 'selectTag','getDoneItemTag','getNotDoneItemTag']),
        taskList(){
            let tasks = [];
            const typeName = !!this.$route.query.name ? this.$route.query.name: "";
            switch (typeName) {
                case '':
                case 'Todo':
                    tasks = this.itemsNotDone;
                    break;
                case 'Done':
                    tasks = this.itemsDone;
                    break;
                default:
                    break;
            }

            const today = moment().format('YYYY-MM-DD');
            const newTask = tasks.map((task) => {
                const taskList = JSON.parse(JSON.stringify(task));
                const selectTag = JSON.parse(JSON.stringify(this.selectTag));
                const time = new Date(taskList.expDate).getTime();

                taskList.isToday = taskList.expDate === today;
                taskList.taskTag = taskList.taskTag.split(',');
                taskList.time = time;

                if (selectTag.length === 0){
                   taskList.isTag = true;
                } 
                else {
                    selectTag.map((tag) => {
                        if(taskList.taskTag.includes(tag)){
                            taskList.isTag = true;
                        }
                        return taskList
                    })
                }
                
                return taskList;
            });

            newTask.sort((a,b) => {
                return a.time - b.time;
            });

            return newTask;
        },

        formatItemTag(){
            let doneTags = JSON.parse(JSON.stringify(this.getDoneItemTag));
            let notDoneTags = JSON.parse(JSON.stringify(this.getNotDoneItemTag));

            if (this.$route.query.name === 'Done') {
                this.$store.state.selectTag = [];
                const newTags = doneTags.map((tag) => {
                    const tagArr = {
                        tagName: tag,
                        isActive: false,
                    }
                    return tagArr;
                })
                return newTags;
            } else {
                this.$store.state.selectTag = [];
                const newTags = notDoneTags.map((tag) => {
                    const tagArr = {
                        tagName: tag,
                        isActive: false,
                    }
                    return tagArr;
                })
                return newTags;
            }
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
        
        turnDone(id){
            const itemid = this.itemsID(id);
            itemid[0].isDone = !itemid[0].isDone;
            if(itemid[0].isDone === true){
                Swal.fire('移至完成項目頁面');
            }else{
                Swal.fire('移至待辦項目頁面');
            }
            const newTaskArr = [...this.otherItemsID(id), ...itemid];
            localStorage.set('todos', JSON.stringify(newTaskArr));
        },

        removeTask(id){
            const itemID = [];
            itemID.push(id);
            Swal.fire({
                title: '確定要刪除嗎?',
                text: "刪掉就回不來了喔!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                    '已刪除!',
                    )
                    this.$store.commit('removeTask', itemID);
                    this.itemid = '';
                } else {
                    this.itemid = '';
                }
            })
        },

        changeTag(item){
            this.$store.commit('chooseTag', item.tagName);
            item.isActive = !item.isActive;
        },

        openMenu(item){
            if(this.itemid === ''){
                this.itemid = item.id;
            } else {
                this.itemid = '';
            }
        },

        openMultiEditMenu(){
            this.isOpen = !this.isOpen;
        },

        chooseItem(){
            this.isCheck = !this.isCheck;
            this.isOpen = false;
        },

        cancle(){
            this.isCheck = false;
        },

        submit(){
            if(this.$route.query.name !== 'Done'){
                this.$store.commit('editTodoList',this.checkItem);
                window.location.href='#/Add?name=edit';
            } else {
                const checkItem = JSON.parse(JSON.stringify(this.checkItem));

                Swal.fire({
                    title: '確定要刪除嗎?',
                    text: "刪掉就回不來了喔!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes!'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                        '已刪除!',
                        )
                        this.$store.commit('removeTask',checkItem);
                        this.isCheck = false;
                    } else {
                        this.checkItem = [];
                        this.isCheck = false;
                    }
                })
            }
        }

    },
};
</script>
<style lang="scss" scoped>
</style>