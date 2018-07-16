import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatGridListModule, MatIconModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserRegistrationComponent} from './user-registration.component';
import { RouterService} from '../core/services/router.service';
import {UserRegistrationRoutingModule} from './user-registration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [UserRegistrationComponent],
  providers: [RouterService]
})
export class UserRegistrationModule { }
