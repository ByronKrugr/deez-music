import { TestBed } from '@angular/core/testing';

import { MusicTrackDetailsHttpService } from './music-track-details-http.service';

describe('MusicTrackDetailsHttpService', () => {
  let service: MusicTrackDetailsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicTrackDetailsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
