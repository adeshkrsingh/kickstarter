import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ThemecolorDirective } from './directives/themecolor.directive';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { ApiconnectionService } from './services/apiconnection.service';
import { GlobalemitterService } from './services/globalemitter.service';
import { ThemecolorsService } from './services/themecolors.service';
import { UserdataService } from './services/userdata.service';
import { HeadercolorDirective } from './directives/headercolor.directive';
import { FootercolorDirective } from './directives/footercolor.directive';
import { Loader2Component } from './shared/loader2/loader2.component';
import { Loader1Component } from './shared/loader1/loader1.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ThemecolorDirective,
    HeadercolorDirective,
    FootercolorDirective
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    // Loader1Component,
    // Loader2Component,
    // ChartModule
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    SharedModule,
  ],
  providers: [
    ApiconnectionService,
    GlobalemitterService,
    ThemecolorsService,
    UserdataService,
    ThemecolorDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
