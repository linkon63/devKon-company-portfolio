import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AbooutPage from "../pages/AboutPage.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AbooutPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;