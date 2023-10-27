import { TestBed } from '@angular/core/testing';

import { LightIndicatorsService } from './light-indicators.service';

describe('LightIndicatorsService', () => {
  let service: LightIndicatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightIndicatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
