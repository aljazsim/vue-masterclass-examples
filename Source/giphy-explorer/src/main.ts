import "./assets/animations.scss";
import "./assets/bootstrap.scss";
import "./assets/style.scss";
import "./registerServiceWorker";
import "@popperjs/core";
import "bootstrap";
import "reflect-metadata";
import { Configuration, getConfiguration } from "./common/configuration";
import GiphInfo from "./components/GiphDetails/GiphInfo/GiphInfo.vue";
import GiphStatusBar from "./components/GiphDetails/GiphStatusBar/GiphStatusBar.vue";
import GiphTitleBar from "./components/GiphDetails/GiphTitleBar/GiphTitleBar.vue";
import GiphImage from "./components/GiphSearch/GiphImage/GiphImage.vue";
import GiphList from "./components/GiphSearch/GiphList/GiphList.vue";
import GiphPager from "./components/GiphSearch/GiphPager/GiphPager.vue";
import GiphSearchBox from "./components/GiphSearch/GiphSearchBox/GiphSearchBox.vue";
import Layout from "./components/Layout/Layout.vue";
import { AutoFocusDirective } from "./directives/AutoFocusDirective";
import { AutoSelectDirective } from "./directives/AutoSelectDirective";
import App from "./pages/App/App.vue";
import { GiphyApiClient } from "./services/api/GiphyApiClient";
import { IGiphyApiClient } from "./services/api/IGiphyApiClient";
import { IRoutingManager } from "./services/router/IRoutingManager";
import router from "./services/router/routing";
import { RoutingManager } from "./services/router/RoutingManager";
import { IStateManager } from "./services/state/IStateManager";
import { StateManager } from "./services/state/stateManager";
import { store } from "./services/state/store";
import { cid, container } from "inversify-props";
import { createApp } from "vue";
import VueLoadImage from "vue-load-image";
import ChevronTrippleLeftIcon from "vue-material-design-icons/ChevronTripleLeft.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
import ContentCopyIcon from "vue-material-design-icons/ContentCopy.vue";
import ContentSaveOutlineIcon from "vue-material-design-icons/ContentSaveOutline.vue";
import DownloadIcon from "vue-material-design-icons/Download.vue";
import ImageSearchOutlineIcon from "vue-material-design-icons/ImageSearchOutline.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import SyncIcon from "vue-material-design-icons/Sync.vue";

// configuration
const configuration: Configuration = getConfiguration();

// configure dependency injection
container.bind<IGiphyApiClient>(cid.IGiphyApiClient).toConstantValue(new GiphyApiClient(configuration.giphy.apiBaseUrl, configuration.giphy.apiKey));
container.bind<IStateManager>(cid.IStateManager).toConstantValue(new StateManager(store));
container.bind<IRoutingManager>(cid.IRoutingManager).toConstantValue(new RoutingManager(router));

// configure application
const app = createApp(App);

// register external components
app.component("vue-load-image", VueLoadImage);

// register components
app.component("layout", Layout);

app.component("giph-search-box", GiphSearchBox);
app.component("giph-list", GiphList);
app.component("giph-image", GiphImage);
app.component("giph-pager", GiphPager);

app.component("giph-title-bar", GiphTitleBar);
app.component("giph-info", GiphInfo);
app.component("giph-status-bar", GiphStatusBar);

// register icons
app.component("icon-search", MagnifyIcon);
app.component("icon-clear", CloseIcon);
app.component("icon-giph", ImageSearchOutlineIcon);
app.component("icon-loading", SyncIcon);
app.component("icon-load-more", DownloadIcon);
app.component("icon-back", ChevronTrippleLeftIcon);
app.component("icon-save", ContentSaveOutlineIcon);
app.component("icon-copy", ContentCopyIcon);

// register directives
// BUG: register AutoFocusDirective as 'auto-focus'
app.directive("auto-select", AutoSelectDirective);

// register plugins
app.use(store);
app.use(router);

router.isReady().then(() => app.mount("#app"));
