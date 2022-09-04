import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { MusicArtistDetailsService } from "src/app/services/musicArtist/music-artist-details.service";
import { MusicChartsHttpService } from "src/app/services/musicCharts/music-charts-http.service";
import { Artist, ArtistAlbums } from "../actions/music-artist-actions";
import { Chart } from "../actions/music-chart-actions";
import { MusicAlbum, MusicArtist, MusicStateModel, MusicTrack } from "../models/music-state.model";

@State<MusicStateModel>({
    name: 'music',
    defaults: {
        chartTracks: [],
        detailedArtist: { id: 0, image: '', name: '' },
        artistTracks: [],
        artistAlbums: []
    },
})
@Injectable({ providedIn: 'root' })
export class MusicState {

    constructor(
        // private chartService: MusicChartsService,
        private chartHttpService: MusicChartsHttpService,
        private artistDetailSerice: MusicArtistDetailsService
        // private artistHttpService: MusicArtistDetailsHttpService
    ) {

    }

    @Action(Chart.GetTracks)
    getTracks(ctx: StateContext<MusicStateModel>) {

        return this.chartHttpService.getChart().pipe(
            tap(tracks => {
                let chartTracks: MusicTrack[] = [];

                for (let i = 0; i < tracks.tracks.data.length; i++) {
                    let rawMusicTrack = tracks.tracks.data[i];
                    let musicChartTrack: MusicTrack = { title: rawMusicTrack.title, id: rawMusicTrack.id }
                    let musicAlbum: MusicAlbum = { id: rawMusicTrack.album.id, image: rawMusicTrack.album.cover_big, title: rawMusicTrack.album.title };
                    let musicArtist: MusicArtist = { id: rawMusicTrack.artist.id, image: rawMusicTrack.artist.cover_big, name: rawMusicTrack.artist.name };
                    chartTracks.push(musicChartTrack);
                    chartTracks[i].album = musicAlbum;
                    chartTracks[i].artist = musicArtist;
                }

                const state = ctx.getState();
                ctx.setState({
                    ...state,
                    chartTracks
                })
            })
        );
    }

    @Action(Artist.Get)
    getArtistDetails(ctx: StateContext<MusicStateModel>, action: Artist.Get) {
        return this.artistDetailSerice.getArtistDetails(action.id).pipe(tap(
            detailedArtist => {
                const state = ctx.getState();

                ctx.setState({
                    ...state,
                    detailedArtist
                })
            }
        ));
    }

    @Action(ArtistAlbums.Get)
    getArtistMusic(ctx: StateContext<MusicStateModel>, action: ArtistAlbums.Get) {
        return this.artistDetailSerice.getArtistMusic(action.name).pipe(tap(
            ([artistTracks, artistAlbums]) => {
                const state = ctx.getState();

                ctx.setState({
                    ...state,
                    artistTracks,
                    artistAlbums
                })
            }
        ));
    }


    // @Action(GetChartTracks)
    // getChartTracks(ctx: StateContext<MusicStateModel>) {
    //     console.log("%c::::::::::::::::::::::::::::::::::::", "background-color: pink");
    //     console.log("%c:::::::::::: in Action :::::::::::::");
    //     console.log("%c::::::::::::::::::::::::::::::::::::", "background-color: pink");
    //     const state = ctx.getState();
    //     ctx.setState({
    //         ...state,
    //         artist: state.artist
    //     });
    // }

    // @Action(GetChartTracksComplete)
    // getChartsTracksComplete(ctx: StateContext<MusicStateModel>, action: GetChartTracksComplete) {
    //     console.log("%c::::::::::::::::::::::::::::::::::::", "background-color: orange");
    //     console.log(":::::::::::: in Action :::::::::::::");
    //     console.log("%c::::::::::::::::::::::::::::::::::::", "background-color: orange");
    //     console.log(action.tracks);
    //     const state = ctx.getState();
    //     ctx.setState({
    //         ...state,
    //         chartTracks: action.tracks
    //     });
    // }

}