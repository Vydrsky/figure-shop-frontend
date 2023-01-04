import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/user/HomePage.vue";
import CollectionPage from "./pages/user/CollectionPage.vue";
import ContactPage from "./pages/user/ContactPage.vue";
import OrderPage from "./pages/user/OrderPage.vue";
import AboutPage from "./pages/user/AboutPage.vue";
import AdminMainPage from "./pages/admin/AdminMainPage.vue";
import DetailsPage from "./pages/user/DetailsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    {
      path: "/collection",
      name: "collection",
      component: CollectionPage,
      children: [
        {
          path: "details/:id",
          name: "details",
          component: DetailsPage,
          props: true,
        },
      ],
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactPage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/order",
      name: "order",
      component: OrderPage,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminMainPage,
    },
    {
      //ensure last
      path: "/:notFound(.*)",
      redirect: "/home",
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    if (savedPosition) {
      return savedPosition;
    } 
    else if(to.name == 'details' || from.name == 'details'){
        return savedPosition;
    }
    else {
      return { top: 0 };
    }
  },
});

export default router;
