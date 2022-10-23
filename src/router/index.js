import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Login from "@/views/Signin.vue";
import VerifyAuthen from "@/views/VerifyAuthen.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/login/verify_authentication",
      name: "VerifyAuthen",
      component: VerifyAuthen,
    },
  ],
});

export default router;
