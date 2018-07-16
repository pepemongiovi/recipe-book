import {Ingredient} from './ingredient.model';

export class Recipe {
  public id: string;
  constructor(public name: string,
              public description: string,
              public imgPath: string,
              public ingredients: Ingredient[]) {}
}
