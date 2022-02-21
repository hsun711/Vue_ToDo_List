<template>
    <div>
        <Header />
        <div id="routerPage">
            <router-view></router-view>
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
        this.init();
        if (!localStorage.get('todos')) {
            localStorage.set('todos', JSON.stringify([]));
        }
    },
    updated(){},
    destroyed(){},
    methods: {
        ...mapActions({}),
        ...mapMutations({
        }),
        init(){
            // const params = {};
            // this.$store.dispatch('getTodoLiast', params).then((response) => {
            //     console.log(response);
            // }, () => {

            // });
        },
    },
};
</script>
<style lang="scss" scoped>
</style>