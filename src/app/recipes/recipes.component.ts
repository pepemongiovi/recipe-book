import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';
import {RecipeService} from './recipe.service';
import {RecipeResolver} from './recipe-resolver.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
