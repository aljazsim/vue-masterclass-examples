import { ImageDto } from "../api/responses/ImageDto";

export interface State {
  isLoading: boolean;
  giphs: ImageDto[];
}
