import {Recipe} from '../recipes/recipe.module';

export class Ingredient {
  constructor(public name: string,
              public amount: number,
              public visible: boolean,
              public recipe: Recipe){}
}
