import { Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

export default class GiphSearchBox extends Vue {
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

    @Watch("searchKeywords", { immediate: true, deep: true })
    public onSearchKeywordsChanged(newValue: string, oldValue: string): void {
        this.model = newValue;
    }

    public clear(): void {
        this.model = "";
        this.emitClearEvent();

        this.selectAll();
    }

    public search(): void {
        if (this.model?.length > 0) {
            this.emitSearchEvent(this.model);
        }
    }

    private selectAll() {
        this.input.focus();
        this.input.select();
    }

    private emitClearEvent() {
        this.$emit("clear");
    }

    private emitSearchEvent(searchKeywords: string) {
        this.$emit("search", searchKeywords);
    }
}
