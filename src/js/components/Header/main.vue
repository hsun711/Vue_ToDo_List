<template>
    <div id="headernav">
        <ul>
            <li :class="[this.$route.name === 'Todo_page' && !this.$route.query.name ? 'active': '']">
                <router-link class="nav-link" :to="{ name: 'Todo_page' }">
                    <span>Todo page</span>
                </router-link>
            </li>
            <li :class="[this.$route.name === 'Todo_page' && this.$route.query.name === 'Done' ? 'active': '']">
                <router-link class="nav-link" :to="{ name: 'Todo_page', query:{ name:'Done'}}">
                    <span>Done page</span>
                </router-link>
            </li>
            <li :class="[this.$route.name === 'Add_page' ? 'active': '']">
                <router-link class="nav-link" :to="{ name: 'Add_page', query:{ name:'Add'}}">
                    <i class="fa-solid fa-plus"></i>
                </router-link>
            </li>
        </ul>
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
    mounted(){},
    methods: {
        ...mapActions({}),
        ...mapMutations({}),
    },
};
</script>
<style lang="scss" scoped>
</style>