<template>
    <div>
        <Header />
        <div id="routerPage">
            <router-view v-if="!init"></router-view>
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { localStorage } from 'lib/common/util';
import Header from '../Header/main.vue';

const pc_min_size = 567;

export default {
    components: {
        Header,
    },
    filters: {},
    props: {},
    data(){
        return {
            init: true,
        };
    },
    computed: {
        ...mapGetters({
            todos: 'todos',
        }),
        route(){
            return this.$route;
        },
    },
    watch: {
    },
    created(){},
    mounted(){
        if (!localStorage.get('todos')) {
            localStorage.set('todos', JSON.stringify([]));
            this.init = false;
        } else {
            this.getTodoList().then(() => {
                this.init = false;
            });
        }
    },
    updated(){},
    destroyed(){},
    methods: {
        ...mapActions({
            getTodoList: 'getTodoList',
        }),
        ...mapMutations({
        }),
    },
};
</script>
<style lang="scss" scoped>
</style>