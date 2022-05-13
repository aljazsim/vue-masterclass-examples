import { BasicGiphInfo } from "../../common/basicGiphInfo";

export interface State {
    giphs: {
        items: BasicGiphInfo[];
        selectedItem: BasicGiphInfo | null;
        totalItemCount: number;
        page: number;
        pageSize: number;
        pageCount: number;
        search: string
    },
    isLoading: boolean;
}
