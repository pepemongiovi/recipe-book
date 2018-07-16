import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailsComponent} from './recipes/recipe-details/recipe-details.component';
import {RecipeResolver} from './recipes/recipe-resolver.service';
import {RecipeRegistrationComponent} from './recipes/recipe-registration/recipe-registration.component';
import {DashboardComponent} from './dashboard.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'recipes', component: RecipesComponent, children: [
          {path: ':id', component: RecipeDetailsComponent, resolve: {recipe: RecipeResolver}},
        ]},
      {path: 'recipe-registration', component: RecipeRegistrationComponent },
      {path: 'shopping-list', component: ShoppingListComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
