import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Recipe} from '../../../core/models/recipe.model';
import {RecipeService} from '../../../core/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.recipe = data['recipe'];
      });
  }

  addToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe).subscribe();
  }

  removeFromShoppingList() {
    this.recipeService.removeIngredientsFromShoppingList(this.recipe).subscribe();
  }
}
