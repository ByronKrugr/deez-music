import { MusicArtist } from "../models/music-state.model";

export namespace Artist {
    export class Get {
        static readonly type = '[Artist API] GetArtist';
        constructor(public id: string | null) { }
    }

    //     export class GetComplete {
    //         static readonly type = '[Artist API] GetArtist';
    //         public constructor(public name: string, public artist: MusicArtist) { }
    //     }
}

export namespace ArtistAlbums {
    export class Get {
        static readonly type = '[ArtistMusicContent API] GetArtist';
        constructor(public name: string | null) { }
    }
}

export namespace ArtistTracks {
    export class Get {
        static readonly type = '';
        constructor(public name: string | null) { }
    }
}