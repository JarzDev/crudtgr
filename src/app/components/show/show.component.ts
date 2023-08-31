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

  constructor(private cognitoService: CognitoService) {
  
    this.cognitoService.getUser();
   
    

  }

}
