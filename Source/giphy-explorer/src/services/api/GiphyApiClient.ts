import { IGiphyApiClient } from "./IGiphyApiClient";
import { SearchGiphsResponse } from "./responses/SearchGiphsResponse";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import qs from "qs";

export class GiphyApiClient implements IGiphyApiClient {
  private readonly http: AxiosInstance;

  constructor(baseUrl: string, private readonly apiKey: string) {
    this.http = axios.create({ baseURL: baseUrl });
  }

  public async searchGiphs(searchKeywords: string): Promise<SearchGiphsResponse> {
    const configuration = this.getHttpConfiguration(this.apiKey);

    configuration.params.q = searchKeywords;

    try {
      const response = await this.http.get<SearchGiphsResponse>("gifs/search", configuration);

      return response.data;
    } catch (error) {
      this.handleHttpError(error);
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
