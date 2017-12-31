import { TestBed, inject } from '@angular/core/testing';

import { LockOwnerService } from './lock-owner.service';

describe('LockOwnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LockOwnerService]
    });
  });

  it('should be created', inject([LockOwnerService], (service: LockOwnerService) => {
    expect(service).toBeTruthy();
  }));
});
