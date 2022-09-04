import { Component, OnChanges, OnInit } from '@angular/core';
import { Actions, ofActionCompleted, ofActionDispatched, Select, Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { MusicChart, MusicTrack } from 'src/app/services/models/music-chart.model';
// import { MusicChartsService } from 'src/app/services/musicCharts/music-charts.service';
// import { GetChartTracks } from 'src/app/store/actions/music-actions';
import { Chart } from 'src/app/store/actions/music-chart-actions';
// import { GetChartTracksHandler } from 'src/app/store/effects/get-chart-tracks-handler';

// export interface MusicTrack {
//   id?: number;
//   title?: string;
//   duration?: number;
//   position?: number;
//   rank?: number;
//   artist?: MusicArtist;
//   album?: MusicAlbum;
// }

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // public chartData$?: Observable<any>;
  // public chartData!: MusicChart;
  // public musicChart: Subject<any> = this.musicChartService.musicChart;
  // public musicChart!: MusicChart;
  public isLoadingTracks = false;
  public tracks$?: Observable<MusicTrack[]>;

  // private musicChartService: MusicChartsService,
  constructor(
    private store: Store,
    private actions$: Actions) {

    this.tracks$ = this.store.select(state => state.music.chartTracks);
  }

  ngOnInit(): void {

    this.actions$.pipe(ofActionDispatched(Chart.GetTracks))
      .subscribe(() => { this.isLoadingTracks = true; });

    this.actions$.pipe(ofActionCompleted(Chart.GetTracks))
      .subscribe(() => {
        this.isLoadingTracks = false;
      });

    this.store.dispatch(new Chart.GetTracks());

    // this.musicChartService.musicChart.subscribe((musicChartData) => {
    //   this.musicChart = musicChartData;
    //   console.log(musicChartData);
    // })
    // this.musicChartService.getMusicChartForTracks();
    // // this.musicChartService.musicChart.subscribe();x
    // // this.chartData$ = this.musicChartService.getMusicChartForTracks();-
    // this.artist$ = this.store.select(state => state.music);
    // this.store.dispatch(new GetChartTracks());
  }

  // viewTrackDetails() {
  // console.log("viewTrackDetails");
  // this.store.dispatch(new GetChartTracks());
  // }

}
