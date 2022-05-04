import { ImageDto } from "./ImageDto";

export interface GiphDto {
  id: string;
  url: string;
  images: {
    // eslint-disable-next-line camelcase
    fixed_height: ImageDto
  };
}
