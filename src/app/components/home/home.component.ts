import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
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
export class HomeComponent implements OnInit {

  
  constructor(private cognitoService: CognitoService, private router: Router) {
  
    this.cognitoService.isAuthenticated()
    .then(() => {
      this.cognitoService.signOut();
    }
    ).catch(() => {
      this.cognitoService.signOut();
    }
    );
     }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigateByUrl('sing-in');
    }, 2000);
  }

}


