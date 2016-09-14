/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ServiceComponent } from './service.component';

describe('Component: Service', () => {
  it('should create an instance', () => {
    let component = new ServiceComponent();
    expect(component).toBeTruthy();
  });
});
