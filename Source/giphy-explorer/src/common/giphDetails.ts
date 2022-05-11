export class GiphDetails {
    constructor(
        public readonly id: string,
        public readonly width: string,
        public readonly height: string,
        public readonly size: string,
        public readonly url: string,
        public readonly title: string,
        public readonly username: string,
        public readonly userDisplayName: string,
        public readonly userDescription: string,
        public readonly userProfileUrl: string,
        public readonly userAvatarUrl: string,
        public readonly created: string,
        public readonly source: string,
        public readonly embedUrl: string) {
    }
}
