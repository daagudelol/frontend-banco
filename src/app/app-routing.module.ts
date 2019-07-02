import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
   { path: '**', component: PagenotfoundComponent }
];


export const APP_ROUTS = RouterModule.forRoot( appRoutes, { useHash: false } );
