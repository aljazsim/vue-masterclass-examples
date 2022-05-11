import { GiphDetails } from "../../../common/giphDetails";
import { formatBytes } from "../../../common/pipes/formatBytes";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphInfo extends Vue {
    @Prop() public giph!: GiphDetails;
    @Prop() public isLoading!: boolean;

    public formatBytes(value: string | number): string {
        return formatBytes(value);
    }
}
