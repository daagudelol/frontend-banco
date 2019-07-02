import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Routes
import { PAGES_ROUTS } from './pages.routes';

//Modules
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//pages
import { PagesComponent } from './pages.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PagesComponent,
    SolicitudComponent,
    HomeComponent
  ],
  exports:[
    PagesComponent,
    SolicitudComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    PAGES_ROUTS,
    SharedModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  entryComponents: [

  ]
})
export class PagesModule { }
