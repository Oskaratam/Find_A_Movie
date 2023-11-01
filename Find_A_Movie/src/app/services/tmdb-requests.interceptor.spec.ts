import { TestBed } from '@angular/core/testing';

import { TMDbRequestsInterceptor } from './tmdb-requests.interceptor';

describe('TMDbRequestsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TMDbRequestsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TMDbRequestsInterceptor = TestBed.inject(TMDbRequestsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
