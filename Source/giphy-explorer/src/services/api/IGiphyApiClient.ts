import { Giph } from "../../common/giph";
import { GiphDetails } from "../../common/giphDetails";
import { PagedList } from "../../common/pagedList";

export interface IGiphyApiClient {
    searchGiphs(searchKeywords: string, page: number, pageSize: number): Promise<PagedList<Giph>>;
    getGiphDetails(giphId: string): Promise<GiphDetails>;
}
