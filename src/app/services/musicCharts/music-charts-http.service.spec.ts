import { TestBed } from '@angular/core/testing';

import { MusicChartsHttpService } from './music-charts-http.service';

describe('MusicChartsHttpService', () => {
  let service: MusicChartsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicChartsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
