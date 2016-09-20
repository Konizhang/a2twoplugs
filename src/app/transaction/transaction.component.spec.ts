/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TransactionComponent } from './transaction.component';

describe('Component: Transaction', () => {
  it('should create an instance', () => {
    let component = new TransactionComponent();
    expect(component).toBeTruthy();
  });
});
