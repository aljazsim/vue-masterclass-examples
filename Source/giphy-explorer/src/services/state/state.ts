import { Giph } from "../../common/giph";

export interface State {
    giphs: {
        items: Giph[];
        selectedItem: Giph | null;
        totalItemCount: number;
        page: number;
        pageSize: number;
        pageCount: number;
        search: string
    },
    isLoading: boolean;
}
