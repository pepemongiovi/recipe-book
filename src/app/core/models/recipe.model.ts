import {Ingredient} from './ingredient.model';
import { User } from './user.model';

export class Recipe {
  public id: string;
  constructor(public name: string,
              public description: string,
              public imgPath: string,
              public ingredients: Ingredient[],
              public user: User ) {}
}
