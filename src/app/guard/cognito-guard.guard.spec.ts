import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cognitoGuardGuard } from './cognito-guard.guard';

describe('cognitoGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => cognitoGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
