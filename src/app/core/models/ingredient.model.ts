import {Recipe} from './recipe.model';
import {User} from './user.model';

export class Ingredient {
  public id: string;
  public recipe: Recipe;
  public user: User;
  constructor(public name: string,
              public amount: number,
              public visible: boolean) {}
}
