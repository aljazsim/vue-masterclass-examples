export class GiphDetails {
    constructor(
        public readonly id: string,
        public readonly width: string,
        public readonly height: string,
        public readonly url: string,
        public readonly title: string,
        public readonly username: string,
        public readonly userDescription: string,
        public readonly userProfileUrl: string,
        public readonly created: string,
        public readonly source: string) {
    }
}
