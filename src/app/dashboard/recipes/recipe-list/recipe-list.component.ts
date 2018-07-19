import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../../../core/services/recipe.service';
import {UserService} from '../../../core/services/user.service';
import {Recipe} from '../../../core/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    return this.recipeService.getRecipes()
      .subscribe(data => {
        this.recipes = data;
        this.getRecipesById();
      }, err => console.log(err));
  }

  getRecipesById() {
    for (let i = 0; i<this.recipes.length; i++) {
      if(typeof this.recipes[i] !== 'object') {
        this.recipeService.getRecipe(this.recipes[i]).subscribe(
          (recipe: Recipe) => {
            this.recipes[i] = recipe;
          }
        );
      }
    }
  }
}
