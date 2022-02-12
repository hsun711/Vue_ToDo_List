<template>
    <div>
        <EachTask />
    </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import EachTask from './EachTask.vue';

export default {
    components: {
        EachTask,
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