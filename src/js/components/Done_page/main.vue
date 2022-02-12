<template>
    <div>
        <!-- <EachTask /> -->
    </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { localStorage } from 'lib/common/util';
import EachTask from '../Todo_page/EachTask.vue';

export default {
    components: {
        EachTask,
    },
    filters: {},
    props: {},
    data(){
        return {
            doneTaskArr: [],
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
        // const tasks = JSON.parse(localStorage.get('todos'));
        // const doneTask = tasks.filter(item => item.isDone === true);
        // console.log(doneTask);
    },
    updated(){},
    destroyed(){},
    methods: {
        ...mapActions({}),
        ...mapMutations({}),
    },
};
</script>
<style lang="scss" scoped>
</style>