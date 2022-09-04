import { TestBed } from '@angular/core/testing';

import { MusicTrackDetailsService } from './music-track-details.service';

describe('MusicTrackDetailsService', () => {
  let service: MusicTrackDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicTrackDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
