import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { Loader1Component } from './loader1/loader1.component';
import { Loader2Component } from './loader2/loader2.component';
import { Loader3Component } from './loader3/loader3.component';
import { Loader4Component } from './loader4/loader4.component';
import { Loader5Component } from './loader5/loader5.component';
import { Loader6Component } from './loader6/loader6.component';
import { Loader7Component } from './loader7/loader7.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    Loader1Component,
    Loader2Component,
    Loader3Component,
    Loader4Component,
    Loader5Component,
    Loader6Component,
    Loader7Component
  ],
  exports: [
    Loader1Component,
    Loader2Component,
    Loader3Component,
    Loader4Component,
    Loader5Component,
    Loader6Component,
    Loader7Component
  ],
})
export class SharedModule { }
