import "./assets/animations.scss";
import "./assets/bootstrap.scss";
import "./assets/style.scss";
import "./registerServiceWorker";
import "@popperjs/core";
import "bootstrap";
import "reflect-metadata";
import { Configuration } from "./common/configuration";
import GiphyList from "./components/GiphyList/GiphyList.vue";
import GiphySearchBox from "./components/GiphySearchBox/GiphySearchBox.vue";
import Layout from "./components/Layout/Layout.vue";
import { AutoFocusDirective } from "./directives/AutoFocusDirective";
import App from "./pages/App/App.vue";
import { GiphyApiClient } from "./services/api/GiphyApiClient";
import { IGiphyApiClient } from "./services/api/IGiphyApiClient";
import { IRoutingManager } from "./services/router/IRoutingManager";
import router from "./services/router/router";
import { RoutingManager } from "./services/router/RoutingManager";
import { IStateManager } from "./services/state/IStateManager";
import { StateManager } from "./services/state/stateManager";
import { store } from "./services/state/store";
import { cid, container } from "inversify-props";
import { createApp } from "vue";

// configuration
const configuration: Configuration = {
  giphyApiBaseUrl: process.env.VUE_APP_GIPHY_API_BASE_URL ?? "",
  giphyApiKey: process.env.VUE_APP_GIPHY_API_KEY ?? ""
};

// configure dependency injection
container.bind<IGiphyApiClient>(cid.IGiphyApiClient).toConstantValue(new GiphyApiClient(configuration.giphyApiBaseUrl, configuration.giphyApiKey));
container.bind<IStateManager>(cid.IStateManager).toConstantValue(new StateManager(store));
container.bind<IRoutingManager>(cid.IRoutingManager).toConstantValue(new RoutingManager(router));

// configure application
const app = createApp(App);

// register components
app.component("layout", Layout);

app.component("giphy-search-box", GiphySearchBox);
app.component("giphy-list", GiphyList);

// register directives
app.directive("auto-focus", AutoFocusDirective);

// register plugins
app.use(store);
app.use(router);

router.isReady().then(() => app.mount("#app"));
