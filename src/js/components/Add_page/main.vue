<template>
    <div id="addPage">
        <AddTask />
    </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import AddTask from './AddTask.vue';

export default {
    components: {
        AddTask,
    },
    filters: {},
    props: {},
    data(){
        return {};
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
    },
};
</script>
<style lang="scss" scoped>
</style>