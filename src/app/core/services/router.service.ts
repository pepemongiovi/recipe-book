import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class RouterService {

  constructor(private router: Router) {}

  goToRecipes(extras = <any>{}) {
    extras.fragment = 'Recipes';
    this.router.navigate(['/dashboard/recipes'], extras);
  }

  goToRecipe(id, extras = <any>{}) {
    extras.fragment = 'Recipes';
    this.router.navigate(['/dashboard/recipes/' + id], extras);
  }

  goToRecipeRegistration(extras = <any>{}) {
    extras.fragment = 'Recipe Registration';
    this.router.navigate(['/dashboard/recipe-registration'], extras);
  }

  goToShoppingList(extras = <any>{}) {
    extras.fragment = 'Shopping List';
    this.router.navigate(['/dashboard/shopping-list'], extras);
  }

  goToLogin(extras = <any>{}) {
    extras.fragment = 'Login';
    this.router.navigate(['/login'], extras);
  }

  goToUserRegistration(extras = <any>{}) {
    extras.fragment = 'User Registration';
    this.router.navigate(['/register'], extras);
  }
}
