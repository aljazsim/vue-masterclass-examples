import { Observable, Subscription } from "rxjs";
import { Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

export default class GiphSearchBox extends Vue {
    private clearedSubscription: Subscription = null;

    @Prop() public cleared!: Observable<void>;
    @Prop() public hasItems!: boolean;
    @Prop() public isLoading!: boolean;
    @Prop() public searchKeywords!: string;

    public model = "";

    public get canClear(): boolean {
        return !this.isLoading && this.hasItems;
    }

    public get canSearch(): boolean {
        return !this.isLoading && this.model?.length > 0;
    }

    private get input(): HTMLInputElement {
        return this.$refs.input as HTMLInputElement;
    }

    @Watch("cleared", { immediate: true, deep: false })
    public onClearedChanged(): void {
        if (this.clearedSubscription == null) {
            this.clearedSubscription = this.cleared.subscribe(() => this.selectAll());
        }
    }

    @Watch("searchKeywords", { immediate: true, deep: false })
    public onSearchKeywordsChanged(newValue: string): void {
        this.model = newValue;
    }

    public clear(): void {
        this.model = "";
        this.emitClearEvent();
    }

    public search(): void {
        if (this.model?.length > 0) {
            this.emitSearchEvent(this.model);
        }
    }

    public unmounted(): void {
        this.clearedSubscription?.unsubscribe();
        this.clearedSubscription = null;
    }

    private emitClearEvent() {
        this.$emit("clear");
    }

    private emitSearchEvent(searchKeywords: string) {
        this.$emit("search", searchKeywords);
    }

    private selectAll() {
        this.input.focus();
        this.input.select();
    }
}
