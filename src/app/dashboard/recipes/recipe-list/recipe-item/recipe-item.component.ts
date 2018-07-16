import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../../../../core/models/recipe.model';
import {RecipeService} from '../../../../core/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeDeleted = new EventEmitter();

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.recipe.id)
      .subscribe(() => {
        this.recipeDeleted.emit();
        this.router.navigate(['../'], {relativeTo: this.route});
      });
  }
}
