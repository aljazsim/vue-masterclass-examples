import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphTitleBar extends Vue {
    @Prop() public isLoading!: boolean;
    @Prop() public title!: string;
    @Prop() public userAvatarUrl!: string;

    public goBack(): void {
        this.emitGoBackEvent();
    }

    private emitGoBackEvent() {
        this.$emit("goBack");
    }
}
