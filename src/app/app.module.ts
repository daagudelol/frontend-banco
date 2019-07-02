import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


//Ruts
import { APP_ROUTS } from './app-routing.module';

//Modules
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';

//Services
import { ServicesModule } from './services/services.module';

import { AppComponent } from './app.component';


//
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';






@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    APP_ROUTS,
    PagesModule,
    ComponentsModule,
    ServicesModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
