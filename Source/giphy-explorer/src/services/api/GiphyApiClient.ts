import { Giph } from "../../common/giph";
import { GiphDetails } from "../../common/giphDetails";
import { PagedList } from "../../common/pagedList";
import { IGiphyApiClient } from "./IGiphyApiClient";
import { GetGiphResponse } from "./responses/GetGiphResponse";
import { SearchGiphsResponse } from "./responses/SearchGiphsResponse";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { decamelizeKeys } from "humps";
import qs from "qs";

export class GiphyApiClient implements IGiphyApiClient {
    private readonly http: AxiosInstance;

    constructor(baseUrl: string, private readonly apiKey: string) {
        this.http = axios.create({ baseURL: baseUrl });
        this.http.interceptors.request.use(this.convertRequestToSnakeCase);
    }

    public async getGiphDetails(giphId: string): Promise<GiphDetails> {
        const configuration = this.getHttpConfiguration(this.apiKey);

        configuration.params.gif_id = giphId;

        try {
            const response = await this.http.get<GetGiphResponse>(`gifs/${giphId}`, configuration);
            const giph = response.data.data;
            const width = giph.images.original.width;
            const height = giph.images.original.height;
            const size = giph.images.original.size;
            const url = giph.images.original.url;
            const title = giph.title;
            const username = giph.user?.username;
            const userDisplayName = giph.user?.display_name;
            const userDescription = giph.user?.description;
            const userProfileUrl = giph.user?.profile_url;
            const userAvatarUrl = giph.user?.avatar_url;
            const created = giph.import_datetime;
            const source = giph.source;
            const embedUrl = giph.embed_url;

            return new GiphDetails(giphId, width, height, size, url, title, username, userDisplayName, userDescription, userProfileUrl, userAvatarUrl, created, source, embedUrl);
        } catch (error) {
            this.handleHttpError(error);
        }
    }

    public async searchGiphs(searchKeywords: string, page: number, pageSize: number): Promise<PagedList<Giph>> {
        const configuration = this.getHttpConfiguration(this.apiKey);

        configuration.params.q = searchKeywords;
        configuration.params.limit = pageSize;
        configuration.params.offset = pageSize == null ? 0 : (page - 1) * pageSize;

        try {
            const response = await this.http.get<SearchGiphsResponse>("gifs/search", configuration);
            const data = response.data;
            const totalItemCount = data.pagination.total_count;
            const pageCount = Math.ceil(data.pagination.total_count / pageSize);
            const giphs = data.data.map(d => new Giph(d.id, d.images.fixed_height.width, d.images.fixed_height.height, d.images.fixed_height.url));

            return new PagedList<Giph>(totalItemCount, giphs, page, pageSize, pageCount);
        } catch (error) {
            this.handleHttpError(error);
        }
    }

    private convertRequestToSnakeCase(config: AxiosRequestConfig<any>): AxiosRequestConfig<any> | Promise<AxiosRequestConfig<any>> {
        if (config.headers["Content-Type"] === "multipart/form-data") {
            return config;
        } else {
            const newConfig = { ...config };

            if (config.params) {
                newConfig.params = decamelizeKeys(config.params);
            }

            if (config.data) {
                newConfig.data = decamelizeKeys(config.data);
            }

            return newConfig;
        }
    }

    private getHttpConfiguration(apiKey: string): AxiosRequestConfig {
        const configuration = {
            params: { api_key: apiKey },
            paramsSerializer: (params: any) => qs.stringify(params, { skipNulls: true })
        };

        return configuration;
    }

    private handleHttpError(error: any) {
        let errorMessage;

        if (error?.response?.data) {
            errorMessage = `Error response: ${error.response.data.status} ${error.response.data.title}.`;
        } else if (error?.response) {
            errorMessage = `Error response: ${JSON.stringify(error.response)}`;
        } else {
            errorMessage = `Error: ${JSON.stringify(error)}`;
        }

        console.error(errorMessage);

        throw error;
    }
}
