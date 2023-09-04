import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { CognitoService } from '../../services/cognito.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title = 'crudtgr';
  activo = false;
  emailtoken = ""

  constructor(private router: Router, private cognitoSrv: CognitoService, private utilsSrv: UtilsService) { 
    
  }

  ngOnInit(): void {
    
    this.utilsSrv.emailtoken().subscribe(_email => {
      console.log('email', _email);
      this.emailtoken = _email;
    });
  }

  logOut() {
     localStorage.removeItem('email'); 
    this.cognitoSrv.signOut();
    this.router.navigate(['/sing-in']);
  }

}
