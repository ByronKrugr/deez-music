export interface MusicChart {
    musicTracks: MusicTrack[];
}

export interface MusicTrack {
    id?: number;
    title?: string;
    duration?: number;
    position?: number;
    rank?: number;
    artist?: MusicArtist;
    album?: MusicAlbum;
    releaseDate?: string;
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