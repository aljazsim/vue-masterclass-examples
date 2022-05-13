import { DetailedGiphInfo } from "../../../common/detailedGiphInfo";
import { formatBytes } from "../../../common/pipes/formatBytes";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphInfo extends Vue {
    @Prop() public giph!: DetailedGiphInfo;
    @Prop() public isLoading!: boolean;

    public formatBytes(value: string | number): string {
        return formatBytes(value);
    }

    public save() {
        this.emitSaveEvent(this.giph);
    }

    private emitSaveEvent(giphDetails: DetailedGiphInfo) {
        this.$emit("save", giphDetails);
    }
}
