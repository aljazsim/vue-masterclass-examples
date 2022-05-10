import { Giph } from "../../common/giph";
import { State } from "./state";
import { MutationTree } from "vuex";

export const selectGiph = "selectGiph";
export const setGiphs = "setGiphs";
export const setIsLoading = "setIsLoading";

export const mutations = <MutationTree<State>>{
    [setIsLoading](state: State, isLoading: boolean): void {
        state.isLoading = isLoading;
    },
    [setGiphs](state: State, data: { items: Giph[], totalItemCount: number, page: number, pageSize: number, pageCount: number, search: string }): void {
        state.giphs.items = data.items;
        state.giphs.totalItemCount = data.totalItemCount;
        state.giphs.page = data.page;
        state.giphs.pageSize = data.pageSize;
        state.giphs.pageCount = data.pageCount;
        state.giphs.search = data.search;
    },
    [selectGiph](state: State, giph: Giph | null): void {
        state.giphs.selectedItem = giph;
    }
};
