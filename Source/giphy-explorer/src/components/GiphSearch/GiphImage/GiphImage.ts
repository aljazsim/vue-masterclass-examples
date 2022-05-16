import "reflect-metadata";
import { BasicGiphInfo } from "../../../common/basicGiphInfo";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphImage extends Vue {
    @Prop() public isLoading!: boolean;
    @Prop() public giph!: BasicGiphInfo;

    public complete = false;
}
