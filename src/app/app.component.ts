import { Component } from '@angular/core';
import { GetChartTracksHandler } from './store/effects/get-chart-tracks-handler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-app';

  constructor(private a: GetChartTracksHandler) {

  }
}
