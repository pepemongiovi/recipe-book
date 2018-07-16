import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../../../core/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    return this.recipeService.getRecipes()
      .subscribe( data => {
        this.recipes = data;
        console.log("RODOU");
      }, err => console.log(err));
  }
}
