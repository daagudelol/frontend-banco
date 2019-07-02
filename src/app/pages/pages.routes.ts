import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

//pages
import { HomeComponent } from './home/home.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

const pagesRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'solicitud', component: SolicitudComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'}
    ]
  }

];


export const PAGES_ROUTS = RouterModule.forChild(pagesRoutes);
