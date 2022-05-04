import { GiphDto } from "./GiphDto";
import { MetaDto } from "./MetaDto";
import { PaginationDto } from "./PaginationDto";

export interface SearchGiphsResponse {
  data: GiphDto[],
  pagination: PaginationDto,
  meta: MetaDto
}
