import { TestBed } from '@angular/core/testing';

import { MusicArtistDetailsService } from './music-artist-details.service';

describe('MusicArtistDetailsService', () => {
  let service: MusicArtistDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicArtistDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
