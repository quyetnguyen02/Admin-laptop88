import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ArgonDashboard);
app.mount("#app");
