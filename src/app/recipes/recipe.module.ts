import {Ingredient} from '../shared/ingredient.module';

export class Recipe {
  constructor(
              public id: string,
              public name: string,
              public description: string,
              public imgPath: string,
              public ingredients: Ingredient[]){}
}
