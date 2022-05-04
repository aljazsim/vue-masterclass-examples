import { IRoutingManager } from "./IRoutingManager";
import { giphySearchRouteName } from "./router";
import { Router, useRoute } from "vue-router";

export class RoutingManager implements IRoutingManager {
  constructor(private readonly router: Router) {
  }

  public goToGiphySearch(): void {
    this.router.push({ name: giphySearchRouteName });
  }

  public isGiphySearchRouteActive(): boolean {
    return useRoute()?.name === giphySearchRouteName;
  }
}
