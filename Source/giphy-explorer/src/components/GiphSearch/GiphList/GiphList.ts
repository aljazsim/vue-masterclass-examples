import "reflect-metadata";
import { Giph } from "../../../common/giph";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphList extends Vue {
    @Prop() public canLoadMore!: boolean;
    @Prop() public giphs!: Giph[];
    @Prop() public isLoading!: boolean;

    public loadMore() {
        this.emitLoadMoreEvent();
    }

    private get list(): HTMLElement {
        return this.$refs.list as HTMLElement;
    }

    public mounted(): void {
        this.list.style.height = this.list.clientHeight + "px";
        this.list.style.overflowY = "auto";
    }

    public select(giph: Giph) {
        this.emitSelectEvent(giph);
    }

    private emitLoadMoreEvent() {
        this.$emit("loadMore");
    }

    private emitSelectEvent(giph: Giph) {
        this.$emit("select", giph);
    }
}
