import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Signin from "@/views/Signin.vue";
import Signup from "@/views/Signup.vue";

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
      component: Signin,
    },
    {
      path: "/register",
      name: "Signup",
      component: Signup,
    },
  ],
});

export default router;
