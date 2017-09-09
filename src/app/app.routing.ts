import { Routes, RouterModule, CanActivate } from '@angular/router'
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



export const APP_ROUTES: Routes = [
    {
        path: '', component: HomeComponent,
    },

    {
        path: 'about', component: AboutComponent
    }

]


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);