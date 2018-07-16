import {Component, OnInit, ViewChild} from '@angular/core';
;
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ShoppingListService} from '../../../core/services/shopping-list.service';
import {Ingredient} from '../../../core/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  form: FormGroup;

  constructor(private shoppingListService: ShoppingListService,
              private _formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
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
    this.shoppingListService.addIngredient(newIngredient).subscribe(
        () => {
          this.shoppingListService.ingredientsChanged.emit();
          this.clearNewIngredientInput();
        });
  }

  addButtonDisabled() {
    // return this.ingredientName === '' || this.ingredientAmount <= 0;
  }

  clearButtonDisabled() {
    // return this.ingredientName === '' && this.ingredientAmount === 0;
  }
}
