import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsService } from 'src/app/services/utils.service';
import { CognitoService } from 'src/app/services/cognito.service';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.scss']
})
export class NavbarUserComponent {

  activo = false;
  emailtoken = ""
  conitoData: any;
constructor(private utilsSrv: UtilsService, private cognitoSrv: CognitoService, private router : Router) { 

this.conitoData = this.cognitoSrv.getUser().then((data) => {
  this.conitoData = data;
  console.log('data', data.attributes.given_name);
  localStorage.setItem('email', data.attributes.given_name);
  this.emailtoken = data.attributes.given_name

})

}

  ngOnInit(): void {
    
   
    ;
  }

  logOut() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Quieres cerrar sesión?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',

      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('email'); 
        this.cognitoSrv.signOut();
        this.router.navigate(['home']);
      }
    }
    )
  }
  async crear(){
  
const { value: formValues } = await Swal.fire({
  title: 'Ingrese los datos',
  html:
    '<p>Nombre</p><input type="text" id="swal-input1" class="swal2-input">' +
    ' <p>Correo</p><input id="swal-input2" class="swal2-input">' +
    '<p>Telefono</p> <input id="swal-input3" class="swal2-input placeholder="123-45-678"">',
  focusConfirm: false,
  preConfirm: () => {
    return [
      (document.getElementById('swal-input1') as HTMLInputElement).value,
      (document.getElementById('swal-input2') as HTMLInputElement).value,
      (document.getElementById('swal-input3') as HTMLInputElement).value
    ]
  }
})

// if (formValues) {
//   Swal.fire(JSON.stringify(formValues))
// }



}

}

        
   
  

