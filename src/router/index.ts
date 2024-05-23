import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostDetailsView from "@/views/PostDetailsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:slug?",
    name: "home",
    component: HomeView,
  },
  {
    path: "/post/:slug", 
    name: "postDetails",
    component: PostDetailsView, 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
