import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicChartsHttpService {

  constructor(private http: HttpClient) { }

  getChart(): Observable<any> { // make it accept chart type and then that number which is unknown for now (might be more path variables)
    // return this.http.get('api/chart');
    return this.http.jsonp('https://api.deezer.com?output=jsonp&callback=ng_jsonp_callback_1', 'JSONP_CALLBACK');

  }
}
