import {Ingredient} from '../shared/ingredient.module';
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ShoppingListService {

  constructor(private http: HttpClient ) {}

  private API = 'http://localhost:8080';
  ingredientsChanged: EventEmitter = new EventEmitter();

  addIngredient(name: string, amount: number, visible: boolean) {
    const url = this.API + '/ingredients';
    return this.http.post(url, new Ingredient(name, amount, visible));
  }

  getIngredients() {
    const url = this.API + '/ingredients';
    return this.http.get(url);
  }

  updateIngredient(ingredient) {
    const url = this.API + '/ingredients/' + ingredient.id;
    ingredient.recipe = null;
    return this.http.put(url, ingredient);
  }

  deleteIngredient(ingredient) {
    const url = this.API + '/ingredients/' + ingredient.id;
    if(ingredient.recipe===null) return this.http.delete(url);
    else{
      ingredient.visible = false;
      return this.updateIngredient(ingredient);
    }
  }
}
