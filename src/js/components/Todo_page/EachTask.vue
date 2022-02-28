<template>
    <div id="eachTask">
        <h1>{{ this.$route.query.name === 'Done' ? "完成項目":"代辦項目" }} :</h1>
        <div class="itemTag">
            <ul>
                <li v-for="item in formatItemTag" 
                    :key="item.tagName" 
                    :class="{'active': item.isActive}" 
                    @click="changeTag(item)">
                    {{ item.tagName }}
                </li>
            </ul>
        </div>
        <div class="taskList">
           <ul>
                <li v-for="item in taskList" v-show="isShow && item.isTag" :key="item.taskName">
                    <div class="checked" :class="type[`${item.taskType}`]">
                        <div class="taskText">
                            <div class="taskTitle">
                                <h4 @click="turnDone(item.id)" :class="{'exp': item.isToday}">
                                    {{ item.taskName }}
                                </h4>
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
                                <i class="fa-solid fa-ellipsis-vertical" @click="openMenu(item)"></i>
                                <div :class="[item.id === itemid ? 'active' : 'editBtn']">
                                    <router-link :to="{ name: 'Add_page', query:{ name: item.id }}">
                                        <i class="fa-solid fa-pen"> 編輯</i>
                                    </router-link>
                                    <i class="fa-solid fa-trash-can" @click="removeTask(item.id)"> 刪除</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul> 
        </div>
    </div>
</template>
<script>
import moment from 'moment';
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { localStorage } from 'lib/common/util';

export default {
    data(){
        return {
            isShow: true,
            isExp: false,
            itemid:'',
            type: {
                work: 'work',
                home: 'home',
                friend: 'friend',
                other: 'other',
            },
        };
    },
    computed: {
        ...mapGetters(['itemsID', 'otherItemsID','getItemTag', 'itemsNotDone', 'itemsDone', 'selectTag']),
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

                taskList.isToday = taskList.expDate === today;
                taskList.taskTag = taskList.taskTag.split(',');

                if (selectTag.length === 0){
                   taskList.isTag = true;
                } 
                else {
                    selectTag.map((tag) => {
                        if(taskList.taskTag.includes(tag)){
                            taskList.isTag = true;
                        } else {
                            taskList.isTag = false;
                        }
                        return taskList
                    })
                }
                return taskList;
            })

            return newTask;
        },

        formatItemTag(){
            let allTags = JSON.parse(JSON.stringify(this.getItemTag));
            const newTags = allTags.map((tag) => {
                const tagArr = {
                    tagName: tag,
                    isActive: false,
                }
                return tagArr;
            })
            return newTags;
        },

        selectTag(){
            return this.$store.state.selectTag;
        }
        
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
            itemid[0].isDone = true;
            const newTaskArr = [...this.otherItemsID(id), ...itemid];
            localStorage.set('todos', JSON.stringify(newTaskArr));
        },

        removeTask(id){
            const itemID = this.itemsID(id);
            this.$store.commit('removeTask', itemID)
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
        }

    },
};
</script>
<style lang="scss" scoped>
</style>