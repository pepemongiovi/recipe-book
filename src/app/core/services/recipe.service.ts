import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../models/recipe.model';
import {ShoppingListService} from './shopping-list.service';
import {RouterService} from './router.service';
import {environment} from '../../../environments/environment';

@Injectable()
export class RecipeService {
  private API;

  constructor(private http: HttpClient,
              private shoppingListService: ShoppingListService,
              private routerService: RouterService) {
    this.API = `${environment.apiUrl}/recipes`;
  }

  getRecipes() {
    const url = this.API;
    return this.http.get(url);
  }

  getRecipe(id) {
    const url = this.API + '/' + id;
    return this.http.get(url);
  }

  createRecipe(recipe: Recipe) {
    const url = this.API;
    this.http.post(url, recipe).subscribe(
      (createdRecipe: Recipe) => {
        console.log(createdRecipe);
        recipe.ingredients.forEach((ingredient) => {
          ingredient.recipe = createdRecipe;
          this.shoppingListService.addIngredient(ingredient).subscribe();
        })
        this.routerService.goToRecipes();
      }
    );
  }

  deleteRecipe(id) {
    const url = this.API + '/' + id;
    return this.http.delete(url);
  }

  addIngredientsToShoppingList(recipe) {
    const url = this.API + '/' + recipe.id + '/add-ingredients';
    return this.http.put(url, recipe);
  }

  removeIngredientsFromShoppingList(recipe) {
    const url = this.API + '/' + recipe.id + '/remove-ingredients';
    return this.http.put(url, recipe);
  }
}
