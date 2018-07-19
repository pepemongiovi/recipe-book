import { Component, OnInit } from '@angular/core';
import {RouterService} from '../../core/services/router.service';
import {User} from '../../core/models/user.model';
import {UserService} from '../../core/services/user.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {
  user: User;

  constructor(private routerService: RouterService,
              private userService: UserService) { }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    const userEmail = JSON.parse(localStorage.getItem('user')).email;
    this.userService.getUserByEmail(userEmail).subscribe(
      (u: User) => {
        this.user = u;
      }
    );
  }

  createRecipe() {
    this.routerService.goToRecipeRegistration();
  }
}
