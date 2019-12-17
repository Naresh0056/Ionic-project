import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeServiceService } from './recipe-service.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit ,AfterViewInit{
  ngAfterViewInit(): void {
    this.recipes=this.recipeService.getAllRecipe();
  }
  recipes:Recipe[];
  constructor(private recipeService:RecipeServiceService) { }

  ngOnInit() {
   this.recipes=this.recipeService.getAllRecipe();
  }

}
