import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarUserComponent } from '../navbar-user/navbar-user.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-add-or-edit',
  standalone: true,
  imports: [CommonModule, NavbarUserComponent, MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule],
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.scss']
})
export class AddOrEditComponent {
  hide = true;

}
