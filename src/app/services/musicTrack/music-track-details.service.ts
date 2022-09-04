import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MusicAlbum, MusicArtist, MusicTrack } from '../models/music-chart.model';
import { MusicTrackDetailsHttpService } from './music-track-details-http.service';

@Injectable({
  providedIn: 'root'
})
export class MusicTrackDetailsService {

  constructor(private trackDetailService: MusicTrackDetailsHttpService) { }

  getTrackDetails(id: string): Observable<MusicTrack> {
    return this.trackDetailService.getTrackDetails(id).pipe(
      map((track: any) => {
        let artist: MusicArtist;
        let album: MusicAlbum;

        artist = {
          id: track.artist.id,
          name: track.artist.name,
          image: track.artist.picture_big,
        }

        album = {
          id: track.album.id,
          title: track.album.title,
          image: track.album.cover_big,
        }

        return {
          id: track.id,
          title: track.title,
          duration: track.duration,
          position: track.position,
          rank: track.rank,
          releaseDate: track.release_date,
          artist: artist,
          album: album
        }
      }))
  }
}
