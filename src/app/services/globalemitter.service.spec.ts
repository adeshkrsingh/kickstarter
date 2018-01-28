import { TestBed, inject } from '@angular/core/testing';

import { GlobalemitterService } from './globalemitter.service';

describe('GlobalemitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalemitterService]
    });
  });

  it('should be created', inject([GlobalemitterService], (service: GlobalemitterService) => {
    expect(service).toBeTruthy();
  }));
});
