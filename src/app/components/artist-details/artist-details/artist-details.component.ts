import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Actions, ofActionCanceled, ofActionCompleted, ofActionDispatched, ofActionErrored, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { MusicArtist } from 'src/app/services/models/music-chart.model';
import { MusicTrack } from 'src/app/services/models/music-chart.model';
import { MusicArtistDetailsHttpService } from 'src/app/services/musicArtist/music-artist-details-http.service';
import { Artist, ArtistAlbums } from 'src/app/store/actions/music-artist-actions';
import { MusicAlbum } from 'src/app/store/models/music-state.model';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  public artist!: MusicArtist;
  public isLoading = false;
  public artist1: MusicArtist = { id: 1, image: 'image', name: 'name' };
  public album1: MusicAlbum = { id: 1, image: 'image', title: 'title' };
  public albums$!: Observable<MusicAlbum[]>;
  public tracks$!: Observable<MusicTrack[]>;
  // public tracks$: Observable<MusicTrack[]> = of([
  //   {
  //     id: 1,
  //     title: 'string',
  //     duration: 1.1,
  //     position: 10012,
  //     rank: 1022,
  //     artist: this.artist1,
  //     album: this.album1,
  //     releaseDate: 'string'
  //   },
  //   {
  //     id: 1,
  //     title: 'string',
  //     duration: 1.1,
  //     position: 10012,
  //     rank: 1022,
  //     artist: this.artist1,
  //     album: this.album1,
  //     releaseDate: 'string'
  //   },
  // ])
  // public data$?: Observable<any>;
  // private artistName:

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private actions: Actions,
    // private http: HttpClient
  ) {
    // this.data$ = this.http.get('https://catfact.ninja/fact');
    // this.data$.subscribe((fact) => {
    //   console.log(fact.fact);
    // })

  }

  ngOnInit(): void {
    this.store.select(state => state.music.detailedArtist).subscribe(detailedArtist => {
      this.artist = detailedArtist;
    });

    // this.store.select(state => state.music.artistAlbums).subscribe((albums) => {
    //   this.albums$ = albums;
    // });

    this.albums$ = this.store.select(state => state.music.artistAlbums);

    this.tracks$ = this.store.select(state => state.music.artistTracks);

    this.route.paramMap.subscribe((params: ParamMap) => {
      let trackId = params.get('id');
      this.store.dispatch(new Artist.Get(trackId));
    })

    this.actions.pipe(ofActionDispatched(Artist.Get)).subscribe(
      () => this.isLoading = true
    );

    this.actions.pipe(ofActionCompleted(Artist.Get)).subscribe(
      () => this.store.dispatch(new ArtistAlbums.Get(this.artist.name))
    );

    this.actions.pipe(ofActionDispatched(ArtistAlbums.Get)).subscribe(
      () => this.isLoading = false
    );

    // this.actions.pipe(ofActionErrored(Artist.Get)).subscribe(
    //   (error: any) => {
    //     console.log('ERROR')
    //     console.log(error)
    //   }
    // );

  }
}
