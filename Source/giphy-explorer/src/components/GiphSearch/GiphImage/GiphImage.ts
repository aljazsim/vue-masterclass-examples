import "reflect-metadata";
import { BasicGiphInfo } from "../../../common/basicGiphInfo";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphImage extends Vue
{
    @Prop() public isLoading!: boolean;

    // BUG: image isn't displayed, because giph property isn't populated by parent component
    public giph!: BasicGiphInfo;

    public complete = false;
}
