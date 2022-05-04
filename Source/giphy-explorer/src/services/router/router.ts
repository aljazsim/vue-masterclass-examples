import GiphySearch from "../../pages/GiphySearch/GiphySearch.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const giphySearchRouteName = "Search";

const catchAllRoute = "/:catchAll(.*)";
const defaultRoute = "/";
const giphySearchRoute = "/search";

const router = createRouter({
  history: createWebHashHistory("/"),
  routes: [
    { path: defaultRoute, name: "Default", redirect: giphySearchRoute },
    { path: giphySearchRoute, name: giphySearchRouteName, component: GiphySearch },
    { path: catchAllRoute, redirect: giphySearchRoute }
  ]
});

export default router;
