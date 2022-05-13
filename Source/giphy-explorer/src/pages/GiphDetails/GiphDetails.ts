import "reflect-metadata";
import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { DetailedGiphInfo } from "../../common/detailedGiphInfo";
import { IGiphyApiClient } from "../../services/api/IGiphyApiClient";
import { IRoutingManager } from "../../services/router/IRoutingManager";
import { IStateManager } from "../../services/state/IStateManager";
import { inject } from "inversify-props";
import { Vue } from "vue-class-component";

export default class GiphDetails extends Vue {
    @inject() private readonly giphyApiClient!: IGiphyApiClient;
    @inject() private readonly routingManager!: IRoutingManager;
    @inject() private readonly stateManager!: IStateManager;

    public get giph(): BasicGiphInfo | null {
        return this.stateManager.state.giphs.selectedItem;
    }

    public get isLoading(): boolean {
        return this.stateManager.state.isLoading;
    }

    public goToGiphSearch(): void {
        this.routingManager.goToGiphSearch();
    }

    public async mounted(): Promise<void> {
        this.stateManager.setIsLoading(true);

        const giphId = this.routingManager.getGiphDetailsParams()?.giphId;

        if (giphId) {
            this.stateManager.selectGiph(await this.giphyApiClient.getGiphDetails(giphId));
        }

        this.stateManager.setIsLoading(false);

        if (!this.giph) {
            this.goToGiphSearch();
        }
    }

    public onSave(giph: DetailedGiphInfo) {
        this.giphyApiClient.downloadFile(giph.url, `${giph.title}.${giph.type}`);
    }
}
