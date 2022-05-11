import { Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";

export default class GiphSearchBox extends Vue {
    @Prop() public isLoading!: boolean;
    @Prop() public hasItems!: boolean;
    @Prop() public searchKeywords!: string;

    public model = "";

    public get canClear(): boolean {
        return !this.isLoading && this.hasItems;
    }

    public get canSearch(): boolean {
        return !this.isLoading && this.model?.length > 0;
    }

    @Watch("searchKeywords", { immediate: true, deep: true })
    public onSearchKeywordsChanged(newValue: string, oldValue: string): void {
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

    private emitClearEvent() {
        this.$emit("clear");
    }

    private emitSearchEvent(searchKeywords: string) {
        this.$emit("search", searchKeywords);
    }
}
