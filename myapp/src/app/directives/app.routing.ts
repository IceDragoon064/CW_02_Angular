import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from 'app/app.component';
import { PageAComponent } from 'app/app.page-a';
import { PageBComponent } from 'app/app.page-b';
import { PageDefault } from 'app/app.pagedefault';
const appRoutes: Routes = [
{ path: 'page-a', component: PageAComponent },
{ path: 'page-b/:id/:firstname', component: PageBComponent },
{ path: '', redirectTo: '/page-a', pathMatch: 'full' },
{ path: '**', component: PageDefault }
];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
