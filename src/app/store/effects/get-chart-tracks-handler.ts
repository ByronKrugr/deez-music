import { Injectable } from "@angular/core";
import { Actions, ofActionCompleted, ofActionDispatched, State, StateContext, Store } from "@ngxs/store";
import { MusicChartsHttpService } from "src/app/services/musicCharts/music-charts-http.service";
import { MusicChartsService } from "src/app/services/musicCharts/music-charts.service";
import { Chart } from "../actions/music-chart-actions";
// import { GetChartTracks, GetChartTracksComplete } from "../actions/music-actions";
import { MusicStateModel } from "../models/music-state.model";

@Injectable({ providedIn: 'root' })
export class GetChartTracksHandler {

    constructor(
        private service: MusicChartsHttpService,
        private actions$: Actions,
        private store: Store) {
        //
        this.actions$.pipe(ofActionDispatched(Chart.GetTracks))
            .subscribe(() => {

                this.service.getChart().subscribe((res: any) => {
                    // console.log(res.tracks.data);

                    // this.store.dispatch(new GetChartTracksComplete(res.tracks.data))

                    //     const state = this.ctx.getState();
                    //     this.ctx.setState({
                    //         ...state,
                    //         song: res.tracks.data[0].title
                    //     });
                })
            });
    }
}