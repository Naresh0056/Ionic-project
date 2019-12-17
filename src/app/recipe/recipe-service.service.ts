import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { NodeStringDecoder } from 'string_decoder';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  recipes :Recipe[]=[
    {
      id:'1',
      title:'Schhhhhhh',
      imgUrl:'https://www.gstatic.com/webp/gallery3/1.png',
      ingredients:['French Fries','Pork Meat','Salad']
  
    },
    {
      id:'2',
      title:'Sfrfgrgt',
      imgUrl:'https://www.gstatic.com/webp/gallery3/1.png',
      ingredients:['French Fries','Pork Meat','Salad']
  
    }
  ]
  constructor() { }

  getAllRecipe(){
    console.log(this.recipes)

    return [...this.recipes]
  }
  getRecipe(recipeId:string){
    return {...this.recipes.find(recipe=>{
      return recipeId===recipe.id
    })}
  }
  deleteRecipe(recipeId:string){
    this.recipes=this.recipes.filter(recipe=>{
      return recipe.id !==recipeId;
    })
  }
}
