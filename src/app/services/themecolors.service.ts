import { Injectable, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import {  } from '@angular/core/src/metadata/directives';

@Injectable()
export class ThemecolorsService {
  private headerBackground: string;
  private footerBackground: String;
  private headerTextColor: String;
  private footerTextColor: String;
  private bodybackground: String;
  private bodyTextColor: String;

  @Output() emmit1: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() { }

  public applicationLoad() {
    this.set_hB('#a04000');
  }

  public set_hB(content: string) {
    this.emmit1.emit(content);
  }
  public get_hB() {
    return this.emmit1;
  }

}
