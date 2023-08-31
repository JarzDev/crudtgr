import { Routes } from '@angular/router';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sing-in', component: SingInComponent},
];
