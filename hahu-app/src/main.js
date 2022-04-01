import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createwebHistory } from "vue-router";

import "bootstrap/dist/css/bootstrap.css";
import OpenPage from './components/OpenPage.vue';
import IngatlanKinalat from './components/IngatlanKinalat.vue';

import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'




const router = createRouter({
  history: createwebHistory(),
  routes: [
    { path: "/", component: OpenPage },
    { path: "/offers", component: IngatlanKinalat },
  ],
});

const app = createApp(App);
app.use(VueGoodTablePlugin);
app.use(router);
import "bootstrap/dist/js/bootstrap";
app.mount("#app");
