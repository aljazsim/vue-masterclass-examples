import { ImageDto } from "../api/responses/ImageDto";
import { State } from "./state";

export interface IStateManager {
  get state(): State;

  setIsLoading(isLoading: boolean): void;
  setGiphys(giphys: ImageDto[]): void;
}
