import { BasicGiphInfo } from "./basicGiphInfo";

export class DetailedGiphInfo extends BasicGiphInfo {
    constructor(
        id: string,
        width: string,
        height: string,
        url: string,
        public readonly size: string,
        public readonly type: string,
        public readonly title: string,
        public readonly username: string,
        public readonly userDisplayName: string,
        public readonly userDescription: string,
        public readonly userProfileUrl: string,
        public readonly userAvatarUrl: string,
        public readonly created: string,
        public readonly source: string,
        public readonly embedUrl: string) {
        super(id, width, height, url);
    }
}
