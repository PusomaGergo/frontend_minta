import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createwebHistory } from "vue-router";

import "bootstrap/dist/css/bootstrap.css";
import OpenPage from './components/OpenPage.vue';
import IngatlanKinalat from './components/IngatlanKinalat.vue';


const router = createRouter({
  history: createwebHistory(),
  routes: [
    { path: "/", component: OpenPage },
    { path: "/offers", component: IngatlanKinalat },
  ],
});

const app = createApp(App);
app.use(router);
import "bootstrap/dist/js/bootstrap";
app.mount("#app");
