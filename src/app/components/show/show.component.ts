import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IUser } from 'src/app/interfaces/iuser';
import { CognitoService } from 'src/app/services/cognito.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']

  
})
export class ShowComponent {

  cognitoData : any ;
  constructor(private cognitoService: CognitoService) {
  

      this.cognitoData  = this.cognitoService.getUser().then((data) => {
        this.cognitoData = data;
        console.log(this.cognitoData.attributes.email);

        localStorage.setItem('email', this.cognitoData.attributes.email);
      })
     
      

      ;
  }
  

}
