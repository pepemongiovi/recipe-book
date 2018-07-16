import {Recipe} from './recipe.model';

export class Ingredient {
  public id: string;
  public recipe: Recipe;
  constructor(public name: string,
              public amount: number,
              public visible: boolean) {}
}
