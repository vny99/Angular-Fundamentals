import { TestBed } from '@angular/core/testing';

import { RouteAuthenticatorService } from './route-authenticator.service';

describe('RouteAuthenticatorService', () => {
  let service: RouteAuthenticatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteAuthenticatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
