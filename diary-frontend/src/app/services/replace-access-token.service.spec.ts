import { TestBed } from '@angular/core/testing';

import { ReplaceAccessTokenService } from './replace-access-token.service';

describe('ReplaceAccessTokenService', () => {
  let service: ReplaceAccessTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplaceAccessTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
