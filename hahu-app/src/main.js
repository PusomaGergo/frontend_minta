import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import "bootstrap/dist/css/bootstrap.css";
import OpenPage from './components/OpenPage.vue';
import IngatlanKinalat from './components/IngatlanKinalat.vue';
import UjHirdetes from './components/UjHirdetes.vue';

import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: OpenPage },
        { path: "/offers", component: IngatlanKinalat },
        { path: "/newad", component: UjHirdetes },
    ],
});

const app = createApp(App);

app.use(VueGoodTablePlugin);
app.use(router);

app.mount("#app");