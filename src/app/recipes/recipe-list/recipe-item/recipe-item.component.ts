import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../../recipe.module';
import {RecipeService} from '../../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

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
