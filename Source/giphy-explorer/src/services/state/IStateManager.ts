import { BasicGiphInfo } from "../../common/basicGiphInfo";
import { State } from "./state";

export interface IStateManager {
    get state(): State;

    setIsLoading(isLoading: boolean): void;
    setGiphs(items: BasicGiphInfo[], totalItemCount: number, page: number, pageSize: number, pageCount: number, search: string): void;
    selectGiph(giph: BasicGiphInfo | null): void;
}
