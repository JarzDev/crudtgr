import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IUser } from 'src/app/interfaces/iuser';
import { CognitoService } from 'src/app/services/cognito.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private cognitoService: CognitoService) {
  
    this.cognitoService.isAuthenticated()
    .then(() => {
      this.cognitoService.signOut();
    }
    ).catch(() => {
      this.cognitoService.signOut();
    }
    );
    

  }

}


