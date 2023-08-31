import { Routes } from '@angular/router';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { HomeComponent } from './components/home/home.component';
import { ShowComponent } from './components/show/show.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sing-in', component: SingInComponent},
    {path: 'show', component: ShowComponent},
    {path: 'sing-up', component: SingUpComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];
