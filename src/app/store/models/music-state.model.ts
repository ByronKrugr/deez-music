// export interface MusicChart {
//     musicTracks: MusicTrack[];
// }

export interface MusicTrack {
    id?: number;
    title?: string;
    duration?: number;
    position?: number;
    rank?: number;
    artist?: MusicArtist;
    album?: MusicAlbum;
}

export interface MusicAlbum {
    id: number;
    title: string;
    image: string;
}

export interface MusicArtist {
    id: number;
    name: string;
    image: string;
}

export interface MusicStateModel {
    chartTracks: MusicTrack[],
    // detailedArtist: MusicArtist
    detailedArtist: MusicArtist,
    artistTracks: MusicTrack[],
    artistAlbums: MusicAlbum[]
}