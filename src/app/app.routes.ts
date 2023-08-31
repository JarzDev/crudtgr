import { Routes } from '@angular/router';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { HomeComponent } from './components/home/home.component';
import { ShowComponent } from './components/show/show.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sing-in', component: SingInComponent},
    {path: 'show', component: ShowComponent},
];
