import { FootercolorDirective } from './footercolor.directive';
import { TestBed, async } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { ThemecolorsService } from '../services/themecolors.service';

describe('FootercolorDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      providers: [
        ThemecolorsService
      ],
    }).compileComponents();
    let em: ElementRef;
    let th: ThemecolorsService;
  }));
  
  it('should create an instance', () => {
    const directive = new FootercolorDirective(this.em, this.th);
    expect(directive.fcolor1).not.toBe(null);
  });
});
