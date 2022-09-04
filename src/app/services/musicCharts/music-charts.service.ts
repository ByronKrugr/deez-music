import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { MusicAlbum, MusicArtist, MusicChart, MusicTrack } from '../models/music-chart.model';
import { MusicChartsHttpService } from './music-charts-http.service';

@Injectable({
  providedIn: 'root'
})
export class MusicChartsService {
  public chartData$?: Observable<any>;
  public chartData!: MusicChart;
  public musicChart = new BehaviorSubject<MusicChart>({ musicTracks: [] });

  constructor(private chartsService: MusicChartsHttpService) { };

  getMusicChartForTracks() {
    this.chartsService.getChart().subscribe((res) => {
      let chartData: MusicChart = { musicTracks: [] };

      for (let i = 0; i < res.tracks.data.length; i++) {
        let rawMusicTrack = res.tracks.data[i];
        let musicChartTrack: MusicTrack = { title: rawMusicTrack.title, id: rawMusicTrack.id }
        let musicAlbum: MusicAlbum = { id: rawMusicTrack.album.id, image: rawMusicTrack.album.cover_big, title: rawMusicTrack.album.title };
        let musicArtist: MusicArtist = { id: rawMusicTrack.artist.id, image: rawMusicTrack.artist.cover_big, name: rawMusicTrack.artist.name };
        chartData.musicTracks[i] = musicChartTrack;
        chartData.musicTracks[i].album = musicAlbum;
        chartData.musicTracks[i].artist = musicArtist;
      }
      // this.musicChart.next(chartData);
    },
      (error: any) => {
        console.log(error);
        throw (error);
      });
  }

}
