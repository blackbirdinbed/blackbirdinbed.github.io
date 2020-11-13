import Vue from "vue";
import VueRouter from "vue-router";
import { TokenUtilities } from "./token-utilities";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "dashboard",
		component: () => import("../views/dashboard.vue")
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/login.vue")
	},
	{
		path: "/register",
		name: "register",
		component: () => import("../views/register.vue")
	},
	{
		path: "/who",
		name: "who",
		component: () => import("../views/who.vue")
	},
	{
		path: "/add",
		name: "add",
		component: () => import("../views/add.vue"),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: "/sections",
		name: "sections",
		component: () => import("../views/sections.vue")
	},
	{
		path: "/section",
		name: "section",
		component: () => import("../views/section.vue"),
		props: true
	},
	{
		path: "/animation",
		name: "animation",
		component: () => import("../views/animation.vue")
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (TokenUtilities.getRoleId() !== 2) {
			next({
				path: "/"
			});
		} else {
			next();
		}
	} else {
		next();
	}
});

export default router;
