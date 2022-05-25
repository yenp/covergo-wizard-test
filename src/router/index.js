import { createRouter, createWebHistory } from "vue-router";
const routers = [
  {
    path: "/",
    component: () => import("../components/layout/Layout.vue"),
    redirect: "/wizard-page/1",
    children: [
      {
        path: "/age-error",
        name: "age-error",
        component: () => import("../views/wizard/AgeError.vue"),
      },
      {
        path: "/wizard-page/:stepId",
        name: "WizardPage",
        component: () => import("../views/wizard/Page.vue"),
        beforeEnter: (to, from, next) => {
          const steps = [1, 2, 3];
          const stepId = to.params.stepId;
          if (!isNaN(stepId) && steps.includes(Number(stepId))) {
            return next();
          }
          next({ name: "not-found" });
        },
        meta: { title: "Wizard - Page" },
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default router;
