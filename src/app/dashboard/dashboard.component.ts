import { Component, OnInit } from '@angular/core';
import {RouterService} from '../core/services/router.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private routerService: RouterService) { }

  ngOnInit() {
  }

  goToShoppingList() {
    this.routerService.goToShoppingList();
  }

  goToRecipes() {
    this.routerService.goToRecipes();
  }
}
