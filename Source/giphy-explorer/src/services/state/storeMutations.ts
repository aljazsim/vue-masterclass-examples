import { ImageDto } from "../api/responses/ImageDto";
import { State } from "./state";
import { MutationTree } from "vuex";

export const setGiphys = "setGiphys";
export const setIsLoading = "setIsLoading";

export const mutations = <MutationTree<State>>{
  [setIsLoading](state: State, isLoading: boolean): void {
    state.isLoading = isLoading;
  },
  [setGiphys](state: State, giphs: ImageDto[]): void {
    state.giphs = giphs;
  }
};
