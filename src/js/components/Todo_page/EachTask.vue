<template>
    <div id="eachTask">
        <h1>{{ this.$route.query.name === 'Done' ? "完成項目":"代辦項目" }} :</h1>
        <div class="itemTag">
            <ul>
                <li v-for="item in formatItemTag" 
                    :key="item.tagName" 
                    :class="{'active': item.isActive}" 
                    @click="changeTag(item)">
                    #{{ item.tagName }}
                </li>
            </ul>
        </div>

        <ul class="taskList">
            <li v-for="item in taskList" v-show="isShow && item.isTag" :key="item.taskName">
                <div class="checked" :class="type[`${item.taskType}`]">
                    <div class="taskText">
                        <h4 @click="turnDone(item.id)" :class="{'exp': item.isToday}">
                            {{ item.taskName }}
                        </h4>
                        <div class="itemTag">
                            <ul>
                                <li v-for="(item, idx) in item.tag" :key="idx">
                                    {{item}}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="editArea">
                        <p>{{ item.expDate }}</p>
                        <div class="editMenu">
                            <i class="fa-solid fa-ellipsis-vertical" @click="openMenu(item)"></i>
                            <div :class="[item.isEdit ? 'active' : 'editBtn']">
                                <i class="fa-solid fa-pen" @click="editTask(item)">編輯</i>
                                <i class="fa-solid fa-trash-can" @click="removeTask(item.id)">刪除</i>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </li>
        </ul>
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
            type: {
                work: 'work',
                home: 'home',
                friend: 'friend',
                other: 'other',
            },
        };
    },
    computed: {
        ...mapGetters(['itemsID', 'otherItemsID','getItemTag', 'itemsNotDone', 'itemsDone', 'selectTag','eachItemTag']),
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
            tasks.map((task) => {
                return task.isToday = task.expDate === today;
            })

            tasks.map((task) => {
                const selectTag = this.selectTag;
                if (selectTag.length === 0){
                    return task.isTag = true;
                } else {
                    selectTag.map((item) => {
                        let reg = new RegExp(item);
                        if(task.taskTag.match(reg)){
                            return task.isTag = true;
                        } else {
                            return task.isTag = false;
                        }
                    })
                }
            })

            tasks.map((task) => {
                const tags = task.taskTag.split(',');
                return task.tag = tags;
            })
            return tasks;
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

        async editTask(item){ 
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
            const id = item.id;
            const data = {id, formValues}
            this.$store.commit('editTask', data);
            item.isEdit = !item.isEdit;
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
            item.isEdit = !item.isEdit;
        }

    },
};
</script>
<style lang="scss" scoped>
</style>