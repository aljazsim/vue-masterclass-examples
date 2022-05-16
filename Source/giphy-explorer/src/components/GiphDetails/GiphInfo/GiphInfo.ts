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

    public onSave() {
        this.emitSaveEvent(this.giph);
    }

    public async onCopy(): Promise<void> {
        this.emitCopyEvent(this.giph);
    }

    private emitSaveEvent(giph: DetailedGiphInfo) {
        this.$emit("save", giph);
    }

    private emitCopyEvent(giph: DetailedGiphInfo) {
        this.$emit("copy", giph);
    }
}
