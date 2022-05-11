import "reflect-metadata";
import { Giph } from "../../../common/giph";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphList extends Vue {
    @Prop() public giphs!: Giph[];
    @Prop() public isLoading!: boolean;
    @Prop() public canLoadMore!: boolean;

    public loadMore() {
        this.emitLoadMoreEvent();
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
