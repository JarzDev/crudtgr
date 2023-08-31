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

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, FormsModule],
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent {
  
  loading: boolean;
  user: IUser;

  constructor(private router: Router,
    private cognitoService: CognitoService) {
this.loading = false;
this.user = {} as IUser;
}

public signIn(): void {
  this.loading = true;
  this.cognitoService.signIn(this.user)
  .then(() => {
    this.router.navigate(['/show']);
  }).catch(() => {
    this.loading = false;
  });
}
}
