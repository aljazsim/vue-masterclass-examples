import { Giph } from "../../common/giph";
import { State } from "./state";

export interface IStateManager {
    get state(): State;

    setIsLoading(isLoading: boolean): void;
    setGiphs(items: Giph[], totalItemCount: number, page: number, pageSize: number, pageCount: number, search: string): void;
    selectGiph(giph: Giph | null): void;
}
