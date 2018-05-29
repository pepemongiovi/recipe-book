import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientName = '';
  ingredientAmount = 0;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.shoppingListService.addIngredient(this.ingredientName, this.ingredientAmount, true)
      .subscribe(() => this.shoppingListService.ingredientsChanged.emit());
  }

  clearInputs() {
    this.ingredientAmount = 0;
    this.ingredientName = '';
  }

  addButtonDisabled() {
    return this.ingredientName === '' || this.ingredientAmount <= 0;
  }

  clearButtonDisabled() {
    return this.ingredientName === '' && this.ingredientAmount === 0;
  }
}
