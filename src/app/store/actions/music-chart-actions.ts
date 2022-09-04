import { MusicTrack } from "src/app/services/models/music-chart.model";

export namespace Chart {
    export class GetTracks {
        static readonly type = '[Chart API] GetTracks';
    }

    export class GetTracksComplete {
        static readonly type = '[Music] GetTracksComplete';
        constructor(public tracks: MusicTrack[]) { }
    }
}

// export class GetChartTracks {
//     static readonly type = '[Music] GetChartTracks';
// }

// export class GetChartTracksComplete {
//     static readonly type = '[Music] GetChartTracksComplete';
//     constructor(public tracks: MusicTrack[]) { }
// }