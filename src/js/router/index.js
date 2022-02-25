import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const routes = [
    {
        path: '/Add',
        name: 'Add_page',
        component: () => import('components/Add_page/main.vue'),
    },
    {
        path: '/',
        name: 'Todo_page',
        component: () => import('components/Todo_page/main.vue'),
    },
];

const router = new VueRouter({
    linkActiveClass: '',
    linkExactActiveClass: 'is-active',
    // mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition){
        if (savedPosition) {
            switch (to.name) {
                default:
                    return savedPosition;
                    // break;
            }
        }

        return {
            x: 0,
            y: 0,
        };
    },
});


export default router;