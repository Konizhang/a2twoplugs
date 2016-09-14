/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ServiceService } from './service.service';

describe('Service: Service', () => {
  beforeEach(() => {
    addProviders([ServiceService]);
  });

  it('should ...',
    inject([ServiceService],
      (service: ServiceService) => {
        expect(service).toBeTruthy();
      }));
});
