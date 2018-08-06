import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../../../../core/models/recipe.model';
import {RecipeService} from '../../../../core/services/recipe.service';
import {RouterService} from '../../../../core/services/router.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeDeleted = new EventEmitter();

  constructor(private recipeService: RecipeService,
              private routerService: RouterService) { }

  ngOnInit() {
  }

  viewRecipeDetails() {
    this.routerService.goToRecipe(this.recipe.id);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.recipe.id)
      .subscribe((res) => {
        console.log(res);
        this.routerService.goToRecipes();
      }, (err) => {console.log(err);});
  }
}
