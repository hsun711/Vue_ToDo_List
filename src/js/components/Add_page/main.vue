<template>
    <div id="addPage">
        <add-task-container @input-data-change="getStatus" />
    </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import AddTaskContainer from './AddTaskContainer.vue';

export default {
    components: {
        AddTaskContainer,
    },
    filters: {},
    props: {},
    data(){
        return {
            inputStatus: false,
        };
    },
    beforeRouteLeave(to, from, next){
        if (this.inputStatus) {
            const answer = window.confirm('確定要離開嗎,網頁不會保留輸入資訊喔');
            if (answer === true) {
                next();
            } else {
                next(false);
            }
        } else {
            next();
        }
    },
    computed: {
        ...mapGetters([
        ]),
    },
    watch: {
    },
    created(){},
    mounted(){},
    updated(){},
    destroyed(){},
    methods: {
        ...mapActions({}),
        ...mapMutations({}),
        getStatus(status){
            this.inputStatus = status;
        },
    },
};
</script>
<style lang="scss" scoped>
</style>