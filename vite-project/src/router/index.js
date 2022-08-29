import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(), routes: [{
        path: "/", component: () => import("../views/Home.vue"), name: "Home",
    }, {
        path: "/game/:id", component: () => import("../views/Detail.vue"), name: "Detail"
    }, {
        path: "/:pathMatch(.*)*", redirect: {name: 'Home'}
    },],
});

export default router;