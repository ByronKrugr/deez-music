import { TestBed } from '@angular/core/testing';

import { MusicArtistDetailsHttpService } from './music-artist-details-http.service';

describe('MusicArtistDetailsHttpService', () => {
  let service: MusicArtistDetailsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicArtistDetailsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
