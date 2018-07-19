import {Ingredient} from './ingredient.model';

export class User {
  public id: number;
  public shoppingList: Ingredient[];
  constructor(public name: string,
              public email: string,
              public password: string) { }
}
