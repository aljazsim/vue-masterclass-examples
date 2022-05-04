import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphySearchBox extends Vue {
  private readonly searchEvent = "search";

  @Prop() public isLoading!: boolean;

  public searchKeywords = "";

  public search(): void {
    if (this.searchKeywords?.length > 0) {
      this.$emit(this.searchEvent, this.searchKeywords);
    }
  }
}
