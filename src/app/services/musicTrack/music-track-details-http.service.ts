import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicTrackDetailsHttpService {

  constructor(private http: HttpClient) { }

  getTrackDetails(id: string): Observable<any> {
    // return this.http.get('api/track/' + id);
    return this.http.jsonp('api/track/' + id + '?output=jsonp&callback=ng_jsonp_callback_1', 'JSONP_CALLBACK');
  }
}
