import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import("../views/HomeView.vue");
const SinglePostView = () => import("../views/SinglePostView.vue");
const NotFound = () => import("../views/404.vue");

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/post/:id",
			name: "single-post",
			component: SinglePostView,
			props: true,
		},
		{ path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
	],
});

export default router;
