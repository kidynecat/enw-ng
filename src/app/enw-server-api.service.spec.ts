import { TestBed } from '@angular/core/testing';

import { EnwServerApiService } from './enw-server-api.service';

describe('EnwServerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnwServerApiService = TestBed.get(EnwServerApiService);
    expect(service).toBeTruthy();
  });
});
