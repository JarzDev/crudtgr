import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { CognitoService } from './services/cognito.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crudtgr';
  activo = false;
  email = localStorage.getItem('email');

  constructor(private router: Router, private cognitoSrv: CognitoService) { 
    
    this.email = localStorage.getItem('email');

  }

  logOut() {
     localStorage.removeItem('email'); 
    this.cognitoSrv.signOut();
    this.router.navigate(['/sing-in']);
  }

  

}
