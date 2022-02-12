<template>
    <div id="eachTask">
        <div class="taskTitle">
            <div class="menuicon" style="font-size: 2rem;">
                <i v-show="isShow" class="fa-regular fa-square-caret-down" @click="handleShow"></i>
                <i v-show="!isShow" class="fa-regular fa-square-caret-up" @click="handleShow"></i>
            </div>
            <h1>Tasks:</h1>
        </div>
        <ul class="taskList">
            <li v-for="(item,index) in tasksArr[0]" v-show="isShow && !item.isDone" :key="item.taskName">
                <div class="checked" @click="isDone(index)">
                    <h4>{{ item.taskName }}</h4>
                    <p>{{ item.expDate }}</p>
                </div>
                <!-- <form action="">
                    <input
                        type="checkbox"
                        value="`${item.taskName}`"
                        name=""
                        @click="isDone(index)"
                    >
                    <h4>{{ item.taskName }}</h4>
                    <p>{{ item.expDate }}</p>
                </form> -->
            </li>
        </ul>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { localStorage } from 'lib/common/util';

export default {
    components: {},
    filters: {},
    props: {},
    data(){
        return {
            taskName: '',
            isShow: true,
            tasksArr: [],
            doneTask: [],
        };
    },
    computed: {
        ...mapGetters([
        ]),
    },
    watch: {
    },
    created(){},
    mounted(){
        const tasks = JSON.parse(localStorage.get('todos'));
        this.tasksArr.push(tasks);
        // console.log(this.tasksArr[0]);
    },
    updated(){},
    destroyed(){},
    methods: {
        ...mapActions({}),
        ...mapMutations({}),
        handleShow(){
            this.isShow = !this.isShow;
        },
        isDone(index){
            this.tasksArr[0][index].isDone = !this.tasksArr[0][index].isDone;
            this.doneTask.push(this.tasksArr[0]);
            localStorage.set('todos', JSON.stringify(this.doneTask[0]));
        },
    },
};
</script>
<style lang="scss" scoped>
</style>