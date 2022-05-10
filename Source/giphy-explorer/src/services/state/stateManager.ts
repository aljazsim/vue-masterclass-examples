import { Giph } from "../../common/giph";
import { IStateManager } from "./IStateManager";
import { State } from "./state";
import { selectGiph, setGiphs, setIsLoading } from "./storeMutations";
import { Store } from "vuex";

export class StateManager implements IStateManager {
    constructor(private readonly store: Store<State>) {
    }

    public get state(): State {
        return this.store.state;
    }

    public selectGiph(giph: Giph | null): void {
        this.store.commit(selectGiph, giph);
    }

    public setGiphs(items: Giph[], totalItemCount: number, page: number, pageSize: number, pageCount: number, search: string): void {
        this.store.commit(setGiphs, { items, totalItemCount, page, pageSize, pageCount, search });
    }

    public setIsLoading(isLoading: boolean): void {
        this.store.commit(setIsLoading, isLoading);
    }
}
