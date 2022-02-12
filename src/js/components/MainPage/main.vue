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
import Header from '../Header/main.vue';


const pc_min_size = 567;
// import $ from 'jquery';
// import 'bootstrap';

// import 'app';
// import { string, jsVars, popup, trackJS, localStorage, ppPanel } from 'lib/common/util';

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