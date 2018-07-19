import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from '../../core/services/shopping-list.service';
import {Ingredient} from '../../core/models/ingredient.model';
import {Recipe} from '../../core/models/recipe.model';
import {RecipeService} from '../../core/services/recipe.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService) { }

  ingredients: Ingredient[] = [];

  ngOnInit() {
    this.loadIngredients();
    this.shoppingListService.ingredientsChanged
      .subscribe(() => this.loadIngredients());
  }

  loadIngredients() {
    this.shoppingListService.getIngredients()
      .subscribe((data: Ingredient[]) => {
        this.ingredients = data.filter((i: Ingredient) => {
          return i.visible;
        });
        this.fetchRecipes();
      });
  }

  fetchRecipes() {
    for (let i = 0; i<this.ingredients.length; i++) {
      if(typeof this.ingredients[i].recipe !== 'object') {
        this.recipeService.getRecipe(this.ingredients[i].recipe).subscribe(
          (recipe: Recipe) => {
            this.ingredients[i].recipe = recipe;
          }
        );
      }
    }
  }

  showRecipeInfo(ingredient) {
    if(ingredient.recipe) {
      return 'From ' + "'" + ingredient.recipe.name + "'" + ' recipe.';
    }else return '';
  }

  deleteIngredient(ingredient) {
    this.shoppingListService.deleteIngredient(ingredient)
      .subscribe(() => this.loadIngredients());
  }
}
