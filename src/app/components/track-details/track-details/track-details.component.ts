import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MusicTrack } from 'src/app/services/models/music-chart.model';
import { MusicTrackDetailsService } from 'src/app/services/musicTrack/music-track-details.service';
import { Artist } from 'src/app/store/actions/music-artist-actions';

@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.scss']
})
export class TrackDetailsComponent implements OnInit {
  // @Input() data: any;
  // trackId?: string | null;
  public musicTrack$: Observable<MusicTrack> | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: MusicTrackDetailsService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let trackId = params.get('id');
      //   console.log(this.trackId);
      // this.musicTrack$ = this.service.getTrackDetails('3135556');
    })


  }

}
