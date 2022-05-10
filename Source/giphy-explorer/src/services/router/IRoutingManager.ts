import { Giph } from "../../common/giph";

export interface IRoutingManager {
    getGiphDetailsParams(): { giphId: string };
    goToGiphDetails(giph: Giph): void;
    goToGiphSearch(): void;
    isGiphDetailsRouteActive(): boolean;
    isGiphSearchRouteActive(): boolean;
}
