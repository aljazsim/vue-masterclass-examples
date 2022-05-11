import { Vue } from "vue-class-component";

export default class GiphStatusBar extends Vue {
    public goBack(): void {
        this.emitGoBackEvent();
    }

    private emitGoBackEvent() {
        this.$emit("goBack");
    }
}
