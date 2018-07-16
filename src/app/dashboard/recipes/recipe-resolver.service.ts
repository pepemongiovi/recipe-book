import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Recipe} from '../../core/models/recipe.model';
import {Observable} from 'rxjs/Observable';
import {RecipeService} from '../../core/services/recipe.service';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
  constructor(private recipeService: RecipeService) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> |
    Promise<any> | any {
    return this.recipeService.getRecipe(route.params['id']).toPromise()
      .then( (data: Recipe) => {
        return data;
      }, err => console.log(err));
  }
}
