import { ImageDto } from "../api/responses/ImageDto";
import { IStateManager } from "./IStateManager";
import { State } from "./state";
import { setGiphys, setIsLoading } from "./storeMutations";
import { Store } from "vuex";

export class StateManager implements IStateManager {
  constructor(private readonly store: Store<State>) {
  }

  public get state(): State {
    return this.store.state;
  }

  public setGiphys(giphys: ImageDto[]): void {
    this.store.commit(setGiphys, giphys);
  }

  public setIsLoading(isLoading: boolean): void {
    this.store.commit(setIsLoading, isLoading);
  }
}
