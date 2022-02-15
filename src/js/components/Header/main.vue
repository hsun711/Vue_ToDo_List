<template>
    <div id="headernav">
        <h1>To Do List</h1>
        <div class="navtag">
            <router-link class="nav-link" :to="{ name: 'Add_page'}">
                <span>Add page</span>
            </router-link>
            <router-link class="nav-link" :to="{ name: 'Todo_page', query:{name:'Todo'}}">
                <span>Todo page</span>
            </router-link>
            <router-link class="nav-link" :to="{ name: 'Done_page', query:{name:'Done'}}">
                <span>Done page</span>
            </router-link>
            <!-- <router-link class="nav-link" :to="{ name: 'Todo_page'}">
                <span>Todo page</span>
            </router-link>
            <router-link class="nav-link" :to="{ name: 'Done_page'}">
                <span>Done page</span>
            </router-link> -->
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
    components: {},
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