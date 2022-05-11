import "reflect-metadata";
import { Giph } from "../../common/giph";
import { IGiphyApiClient } from "../../services/api/IGiphyApiClient";
import { IRoutingManager } from "../../services/router/IRoutingManager";
import { IStateManager } from "../../services/state/IStateManager";
import { inject } from "inversify-props";
import { Vue } from "vue-class-component";

export default class GiphSearch extends Vue {
    @inject() private readonly giphyApiClient!: IGiphyApiClient;
    @inject() private readonly routingManager!: IRoutingManager;
    @inject() private readonly stateManager!: IStateManager;

    public get giphs(): Giph[] {
        return this.stateManager.state.giphs.items;
    }

    public get isLoading(): boolean {
        return this.stateManager.state.isLoading;
    }

    public get itemCount(): number {
        return this.stateManager.state.giphs.items?.length;
    }

    public get searchKeywords(): string {
        return this.stateManager.state.giphs.search;
    }

    public get totalItemCount(): number {
        return this.stateManager.state.giphs.totalItemCount;
    }

    public onClear(): void {
        this.stateManager.setIsLoading(true);
        this.stateManager.setGiphs([], 0, 1, this.stateManager.state.giphs.pageSize, 0, "");
        this.stateManager.setIsLoading(false);
    }

    public async onLoadMore(): Promise<void> {
        this.stateManager.setIsLoading(true);

        const searchKeywords = this.stateManager.state.giphs.search;
        const page = this.stateManager.state.giphs.page + 1;
        const pageSize = this.stateManager.state.giphs.pageSize;
        const giphs = await this.giphyApiClient.searchGiphs(searchKeywords, page, pageSize);
        const items = this.stateManager.state.giphs.items.concat(giphs.items);

        this.stateManager.setGiphs(items, giphs.totalItemCount, page, giphs.pageSize, giphs.pageCount, searchKeywords);
        this.stateManager.setIsLoading(false);
    }

    public async onSearch(searchKeywords: string): Promise<void> {
        this.stateManager.setIsLoading(true);

        const page = 1;
        const pageSize = this.stateManager.state.giphs.pageSize;
        const giphs = await this.giphyApiClient.searchGiphs(searchKeywords, page, pageSize);

        this.stateManager.setGiphs(giphs.items, giphs.totalItemCount, giphs.page, giphs.pageSize, giphs.pageCount, searchKeywords);
        this.stateManager.setIsLoading(false);
    }

    public onSelect(giph: Giph): void {
        this.stateManager.selectGiph(null);
        this.routingManager.goToGiphDetails(giph);
    }
}
