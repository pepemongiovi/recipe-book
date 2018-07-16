import {Ingredient} from '../models/ingredient.model';
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class ShoppingListService {

  private API;
  ingredientsChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient ) {
    this.API = `${environment.apiUrl}/ingredients`;
  }

  addIngredient(ingredient: Ingredient) {
    const url = this.API;
    return this.http.post(url, ingredient);
  }

  getIngredients() {
    const url = this.API;
    return this.http.get(url);
  }

  updateIngredient(ingredient) {
    const url = this.API + '/' + ingredient.id;
    ingredient.recipe = null;
    return this.http.put(url, ingredient);
  }

  deleteIngredient(ingredient) {
    const url = this.API + '/' + ingredient.id;
    if (ingredient.recipe === null) {
      return this.http.delete(url);
    } else {
      ingredient.visible = false;
      return this.updateIngredient(ingredient);
    }
  }
}
