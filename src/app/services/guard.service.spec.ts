/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { GuardService } from './guard.service';

describe('Service: Guard', () => {
  beforeEach(() => {
    addProviders([GuardService]);
  });

  it('should ...',
    inject([GuardService],
      (service: GuardService) => {
        expect(service).toBeTruthy();
      }));
});
