import { TestBed } from '@angular/core/testing';

import { AppStepsService } from './app-steps.service';

describe('AppStepsService', () => {
  let service: AppStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
