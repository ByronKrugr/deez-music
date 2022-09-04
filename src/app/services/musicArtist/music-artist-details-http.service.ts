import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicArtistDetailsHttpService {

  constructor(private http: HttpClient) { }

  getArtistDetailsById(id?: string | null): Observable<any> {
    // return this.http.get('/api/artist/' + id);//https://api.deezer.com
    // return this.http.get('https://api.deezer.com/artist/' + id);//https://api.deezer.com
    return this.http.jsonp('https://api.deezer.com/artist/' + id + '?output=jsonp&callback=ng_jsonp_callback_0', "JSONP_CALLBACK");
    // return this.http.get('https://catfact.ninja/fact')
  }

  getArtistAlbumsByArtistName(name: string | null): Observable<any> { // MusicAlbum
    return this.http.jsonp('http://api.deezer.com/search/album?q=' + name + '&output=jsonp&callback=ng_jsonp_callback_2', 'JSONP_CALLBACK');
  }

  getArtistTracksByArtistName(name: string | null): Observable<any> { // MusicTrack
    return this.http.jsonp('http://api.deezer.com/search/track?q=' + name + '&output=jsonp&callback=ng_jsonp_callback_1', 'JSONP_CALLBACK');
  }
}
