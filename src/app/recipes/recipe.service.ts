import {Injectable, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecipeService {
  private API = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getRecipes() {
    const url = this.API + '/recipes';
    return this.http.get(url);
  }

  getRecipe(id) {
    const url = this.API + '/recipes/' + id;
    return this.http.get(url);
  }

  deleteRecipe(id) {
    const url = this.API + '/recipes/' + id;
    return this.http.delete(url);
  }

  addIngredientsToShoppingList(recipe) {
    const url = this.API + '/recipes/' + recipe.id + '/add-ingredients';
    return this.http.put(url, recipe);
  }
}
