import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphSearchBox extends Vue {
    @Prop() public isLoading!: boolean;

    public searchKeywords = "";

    public clear(): void {
        if (this.searchKeywords?.length > 0) {
            this.searchKeywords = "";
            this.emitClearEvent();
        }
    }

    public search(): void {
        if (this.searchKeywords?.length > 0) {
            this.emitSearchEvent(this.searchKeywords);
        }
    }

    private emitClearEvent() {
        this.$emit("clear");
    }

    private emitSearchEvent(searchKeywords: string) {
        this.$emit("search", searchKeywords);
    }
}
