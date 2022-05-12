import "reflect-metadata";
import { Giph } from "../../../common/giph";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphList extends Vue {
    private giphListScrollContainerParentResized: ResizeObserver;

    @Prop() public canLoadMore!: boolean;
    @Prop() public giphs!: Giph[];
    @Prop() public isLoading!: boolean;

    private get giphListScrollContainer(): HTMLElement {
        return this.$refs.giphListScrollContainer as HTMLElement;
    }

    public loadMore() {
        this.emitLoadMoreEvent();
    }

    public mounted(): void {
        this.setGiphListScrollHeight();

        // this monitors for changes in parent element or window resize and ensures the child
        // element gets resized as well (because of scrolling, the element needs to have
        // its dimensions set)
        this.giphListScrollContainerParentResized = new ResizeObserver(() => this.setGiphListScrollHeight());
        this.giphListScrollContainerParentResized.observe(this.giphListScrollContainer.parentElement);
        this.giphListScrollContainerParentResized.observe(this.giphListScrollContainer.ownerDocument.firstElementChild);
    }

    public unmounted(): void {
        this.giphListScrollContainerParentResized.disconnect();
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

    private setGiphListScrollHeight(): void {
        if (this.giphListScrollContainer.clientWidth !== this.giphListScrollContainer.parentElement.clientWidth) {
            this.giphListScrollContainer.style.width = "1px";
            this.giphListScrollContainer.style.width = `${this.giphListScrollContainer.parentElement.clientWidth}px`;
        }

        if (this.giphListScrollContainer.clientHeight !== this.giphListScrollContainer.parentElement.clientHeight) {
            this.giphListScrollContainer.style.height = "1px";
            this.giphListScrollContainer.style.height = `${this.giphListScrollContainer.parentElement.clientHeight}px`;
        }
    }
}
