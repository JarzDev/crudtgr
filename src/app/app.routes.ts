import { Routes } from '@angular/router';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { HomeComponent } from './components/home/home.component';
import { ShowComponent } from './components/show/show.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { cognitoGuardGuard } from './guard/cognito-guard.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sing-in', component: SingInComponent},
   
    {path: 'sing-up', component: SingUpComponent},
    {path: 'show', component: ShowComponent, canMatch: [cognitoGuardGuard] },
    {path: '**', pathMatch: 'full', redirectTo: ''}
];
