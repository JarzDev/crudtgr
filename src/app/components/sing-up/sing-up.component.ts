import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { IUser } from 'src/app/interfaces/iuser';
import { Router } from '@angular/router';
import { CognitoService } from 'src/app/services/cognito.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, FormsModule, NavbarComponent],
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent {

  loading: boolean;
  isConfirm: boolean;
  user: IUser;

  constructor(private router: Router,
              private cognitoService: CognitoService) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as IUser;
  }

  public signUp(): void {
    this.loading = true;
    this.cognitoService.signUp(this.user)
    .then(() => {
      this.loading = false;
      this.isConfirm = true;
    }).catch(() => {
      this.loading = false;
    });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.cognitoService.confirmSignUp(this.user)
    .then(() => {
      this.router.navigate(['/signIn']);
    }).catch(() => {
      this.loading = false;
    });
  }

}
