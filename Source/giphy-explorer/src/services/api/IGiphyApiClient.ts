import { SearchGiphsResponse } from "./responses/SearchGiphsResponse";

export interface IGiphyApiClient {
  searchGiphs(searchKeywords: string): Promise<SearchGiphsResponse>;
}
