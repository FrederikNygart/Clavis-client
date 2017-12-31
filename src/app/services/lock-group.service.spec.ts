import { TestBed, inject } from '@angular/core/testing';

import { LockGroupService } from './lock-group.service';

describe('LockGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LockGroupService]
    });
  });

  it('should be created', inject([LockGroupService], (service: LockGroupService) => {
    expect(service).toBeTruthy();
  }));
});
