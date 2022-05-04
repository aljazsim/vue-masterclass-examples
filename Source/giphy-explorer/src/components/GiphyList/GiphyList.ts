import "reflect-metadata";
import { GiphDto } from "../../services/api/responses/GiphDto";
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class GiphyList extends Vue {
  @Prop() public giphs!: GiphDto[];
}
