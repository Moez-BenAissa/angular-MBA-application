import { TestBed, inject } from '@angular/core/testing';

import { UsersCrudService } from './users-crud.service';

describe('UsersCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersCrudService]
    });
  });

  it('should be created', inject([UsersCrudService], (service: UsersCrudService) => {
    expect(service).toBeTruthy();
  }));
});
