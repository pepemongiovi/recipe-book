import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) { }

  ingredients: Ingredient[] = [];

  ngOnInit() {
    this.loadIngredients();
    this.shoppingListService.ingredientsChanged
      .subscribe(() => this.loadIngredients());
  }

  loadIngredients() {
    this.shoppingListService.getIngredients()
      .subscribe(data => {
        this.ingredients = data.filter((i) => {
          return i.visible;
        });
      });
  }

  deleteIngredient(ingredient) {
    this.shoppingListService.deleteIngredient(ingredient)
      .subscribe(() => this.loadIngredients());
  }
}
