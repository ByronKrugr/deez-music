import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MusicAlbum, MusicTrack } from '../models/music-chart.model';
import { MusicArtistDetailsHttpService } from './music-artist-details-http.service';

@Injectable({
  providedIn: 'root'
})
export class MusicArtistDetailsService {

  constructor(private service: MusicArtistDetailsHttpService) { }

  // getArtisDetailstById(id: string | null): Observable<MusicArtist> {
  getArtistDetails(id: string | null): Observable<any> {
    return this.service.getArtistDetailsById(id).pipe(map(
      response => {
        return {
          id: response.id,
          name: response.name,
          image: response.picture_big
        }
      }
      //   (error: any) => {
      //     console.log("error");
      //     throw error;
      //     console.log(error);
      //   }
    ));
    // return this.service.getArtistsDetails(id)
  }

  // getArtistTracks(name: string | null): Observable<any> {
  //   // return this.service.getArtistsDetails(id)
  // }

  getArtistMusic(name: string | null): Observable<[MusicTrack[], MusicAlbum[]]> {
    let albums = this.service.getArtistAlbumsByArtistName(name).pipe(map(
      (musicAlbums: any) => {
        const albums: MusicAlbum[] = [];
        console.log('albums')
        console.log(musicAlbums)

        musicAlbums.data.forEach((album: any) => {
          albums.push({
            id: album.id,
            title: album.title,
            image: album.cover_big
          })
        })

        console.log('albums')
        console.log(albums)
        return albums;
      }
    ));

    let tracks = this.service.getArtistTracksByArtistName(name).pipe(map(
      (musicTracks: any) => {
        const tracks: MusicTrack[] = [];

        musicTracks.data.forEach((track: any) => {
          tracks.push({
            id: track.id,
            title: track.title,
            // image: track.picture_big
          })
        })

        console.log('tracks')
        console.log(tracks)
        return tracks;
      }
    ));
    return forkJoin([tracks, albums]);
  }
}
