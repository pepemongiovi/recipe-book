import {Component, OnInit, ViewChild} from '@angular/core';
;
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ShoppingListService} from '../../../core/services/shopping-list.service';
import {Ingredient} from '../../../core/models/ingredient.model';
import {UserService} from '../../../core/services/user.service';
import {User} from '../../../core/models/user.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  form: FormGroup;
  loggedUser: User;

  constructor(private shoppingListService: ShoppingListService,
              private userService: UserService,
              private _formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.fetchLoggedUser();
  }

  fetchLoggedUser() {
    const userEmail = JSON.parse(localStorage.getItem('user')).email;
    this.userService.getUserByEmail(userEmail).subscribe(
      (user: User) => {
        this.loggedUser = user;
      }
    );
  }

  createForm() {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required]],
      amount: [1, [Validators.required]]
    });
  }

  clearNewIngredientInput() {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required]],
      amount: [1, [Validators.required]]
    });
  }

  addIngredient() {
    const newIngredient = new Ingredient(this.form.value.name,
      this.form.value.amount, true);
    newIngredient.user = this.loggedUser;
    this.shoppingListService.addIngredient(newIngredient).subscribe(
      () => {
        this.shoppingListService.ingredientsChanged.emit();
        this.clearNewIngredientInput();
      });

  }
}
