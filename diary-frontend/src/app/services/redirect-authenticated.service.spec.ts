import { TestBed } from '@angular/core/testing';

import { RedirectAuthenticatedService } from './redirect-authenticated.service';

describe('RedirectAuthenticatedService', () => {
  let service: RedirectAuthenticatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedirectAuthenticatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
