import Layout from "@/views/_layout/index.vue";

export default {
  path: "/",
  sort: 0,
  component: Layout,
  redirect: "/dashboard",
  children: [
    {
      path: "login",
      name: "login",
      component: () => import("@/views/_login/index.vue"),
      meta: {
        title: "login",
      },
    },
    {
      path: "ide",
      name: "ide",
      component: () => import("@/views/ide/index.vue"),
      meta: {
        title: "ide",
      },
    },
  ],
};
