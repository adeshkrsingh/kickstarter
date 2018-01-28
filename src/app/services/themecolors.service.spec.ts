import { TestBed, inject } from '@angular/core/testing';

import { ThemecolorsService } from './themecolors.service';

describe('ThemecolorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemecolorsService]
    });
  });

  it('should be created', inject([ThemecolorsService], (service: ThemecolorsService) => {
    expect(service).toBeTruthy();
  }));
});
