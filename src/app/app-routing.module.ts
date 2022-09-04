import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrackDetailsComponent } from './components/track-details/track-details/track-details.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details/artist-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'track/:id', component: TrackDetailsComponent },
  { path: 'artist/:id', component: ArtistDetailsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, // remove 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
