import { TestBed, inject } from '@angular/core/testing';

import { UsersAuthenService } from './users-authen.service';

describe('UsersAuthenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersAuthenService]
    });
  });

  it('should be created', inject([UsersAuthenService], (service: UsersAuthenService) => {
    expect(service).toBeTruthy();
  }));
});
