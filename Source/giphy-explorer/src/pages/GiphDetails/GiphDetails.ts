import "reflect-metadata";
import { Giph } from "../../common/giph";
import { IGiphyApiClient } from "../../services/api/IGiphyApiClient";
import { IRoutingManager } from "../../services/router/IRoutingManager";
import { IStateManager } from "../../services/state/IStateManager";
import { inject } from "inversify-props";
import { Vue } from "vue-class-component";

export default class GiphDetails extends Vue {
    @inject() private readonly giphyApiClient!: IGiphyApiClient;
    @inject() private readonly routingManager!: IRoutingManager;
    @inject() private readonly stateManager!: IStateManager;

    public get giph(): Giph | null {
        return this.stateManager.state.giphs.selectedItem;
    }

    public get isLoading(): boolean {
        return this.stateManager.state.isLoading;
    }

    public async mounted(): Promise<void> {
        const giphId = this.routingManager.getGiphDetailsParams()?.giphId;

        if (giphId) {
            this.stateManager.selectGiph(await this.giphyApiClient.getGiphDetails(giphId));
        }

        if (!this.giph) {
            this.routingManager.goToGiphSearch();
        }
    }
}
