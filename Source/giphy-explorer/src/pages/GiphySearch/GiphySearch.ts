import "reflect-metadata";
import { IGiphyApiClient } from "../../services/api/IGiphyApiClient";
import { ImageDto } from "../../services/api/responses/ImageDto";
import { IRoutingManager } from "../../services/router/IRoutingManager";
import { IStateManager } from "../../services/state/IStateManager";
import { inject } from "inversify-props";
import { Vue } from "vue-class-component";

export default class GiphySearch extends Vue {
  @inject() private readonly giphyApiClient!: IGiphyApiClient;
  @inject() private readonly routingManager!: IRoutingManager;
  @inject() private readonly stateManager!: IStateManager;

  public get giphs(): ImageDto[] {
    return this.stateManager.state.giphs;
  }

  public get isLoading(): boolean {
    return this.stateManager.state.isLoading;
  }

  public async mounted(): Promise<void> {
    // todo
  }

  public async onSearch(searchKeywords: string): Promise<void> {
    const response = await this.giphyApiClient.searchGiphs(searchKeywords);

    this.stateManager.setIsLoading(true);
    this.stateManager.setGiphys(response.data.map(d => d.images.fixed_height));
    this.stateManager.setIsLoading(false);
  }
}
