import { Component, OnInit } from '@angular/core';
import {RouterService} from '../../core/services/router.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {
  constructor(private routerService: RouterService) { }

  ngOnInit() {
  }

  createRecipe() {
    this.routerService.goToRecipeRegistration();
  }
}
