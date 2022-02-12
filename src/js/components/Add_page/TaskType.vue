<template>
    <div id="taskType">
        <form action="get">
            <select id="type" name="type" v-model="taskType">
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
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
    components: {},
    filters: {},
    props: {},
    data(){
        return {
            taskType: '',
        };
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
        checkType(){
            console.log(this.taskType);
        },
    },
};
</script>

<style>

</style>