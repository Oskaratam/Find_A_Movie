import { TestBed } from '@angular/core/testing';

import { FindTrailerService } from './find-trailer.service';

describe('FindTrailerService', () => {
  let service: FindTrailerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindTrailerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
