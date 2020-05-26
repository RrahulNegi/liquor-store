import { TestBed, inject } from '@angular/core/testing';

import { MessangerService } from './messanger.service';

describe('MessangerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessangerService]
    });
  });

  it('should be created', inject([MessangerService], (service: MessangerService) => {
    expect(service).toBeTruthy();
  }));
});
