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
import Swal from 'sweetalert2';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, MatButtonModule, FormsModule, NavbarComponent],
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

public signIn() {
  try {
     
    this.cognitoService.signIn(this.user)
    .then((data) => {
      this.loading = true;
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: 'Iniciando sesión',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigateByUrl('show');
    }
    ).catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message,
      });
    }
    );
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Usuario o contraseña incorrectos',
      
    });
  }

}

}
