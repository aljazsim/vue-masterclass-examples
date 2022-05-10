import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphStatusBar extends Vue {
    @Prop() public itemCount!: number;
    @Prop() public totalItemCount!: number;
}
