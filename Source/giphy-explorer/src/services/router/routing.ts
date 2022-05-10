import GiphDetails from "../../pages/GiphDetails/GiphDetails.vue";
import GiphSearch from "../../pages/GiphSearch/GiphSearch.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const giphDetailsRouteName = "Details";
export const giphSearchRouteName = "Search";

const catchAllRoute = "/:catchAll(.*)";
const defaultRoute = "/";
const giphDetailsRoute = "/details/:giphId";
const giphSearchRoute = "/search";

const router = createRouter({
    history: createWebHashHistory("/"),
    routes: [
        { path: defaultRoute, name: "Default", redirect: giphSearchRoute },
        { path: giphSearchRoute, name: giphSearchRouteName, component: GiphSearch },
        { path: giphDetailsRoute, name: giphDetailsRouteName, component: GiphDetails },
        { path: catchAllRoute, redirect: giphSearchRoute }
    ]
});

export default router;
