import { Observable, Subscription } from "rxjs";
import { Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

export default class GiphSearchBox extends Vue
{
    private clearedSubscription: Subscription = null;

    @Prop() public cleared!: Observable<void>;
    @Prop() public hasItems!: boolean;
    @Prop() public isLoading!: boolean;
    @Prop() public searchHistory!: string[];
    @Prop() public searchKeywords!: string;

    public model = "";

    public get canClear(): boolean
    {
        return !this.isLoading && this.hasItems;
    }

    public get canSearch(): boolean
    {
        return !this.isLoading && this.model?.length > 0;
    }

    public get canSeeSearchHistory(): boolean
    {
        return !this.isLoading && this.searchHistory.length > 0;
    }

    private get input(): HTMLInputElement
    {
        return this.$refs.input as HTMLInputElement;
    }

    @Watch("cleared", { immediate: true, deep: false })
    public onClearedChanged(): void
    {
        if (this.clearedSubscription == null)
        {
            this.clearedSubscription = this.cleared.subscribe(() => this.selectAll());
        }
    }

    @Watch("searchKeywords", { immediate: true, deep: false })
    public onSearchKeywordsChanged(newValue: string): void
    {
        this.model = newValue;
    }

    public onClear(): void
    {
        this.model = "";
        this.emitClearEvent();
    }

    public onClearSearchHistory()
    {
        this.emitClearSearchHistory();
    }

    public onSearch(searchKeywords: string): void
    {
        if (searchKeywords?.length > 0)
        {
            this.emitSearchEvent(searchKeywords);
        }
    }

    public unmounted(): void
    {
        this.clearedSubscription?.unsubscribe();
        this.clearedSubscription = null;
    }

    private emitClearEvent()
    {
        this.$emit("clear");
    }

    private emitClearSearchHistory()
    {
        this.$emit("clearSearchHistory");
    }

    private emitSearchEvent(searchKeywords: string)
    {
        this.$emit("search", searchKeywords);
    }

    private selectAll()
    {
        this.input.focus();
        this.input.select();
    }
}
