import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
 loadedRecipe:Recipe;
  constructor(private activateRoute:ActivatedRoute,private recipeService:RecipeServiceService,
    private router:Router,private alertCtrl:AlertController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paraMap=>{
      if(!paraMap.has('recipeId')){
        return;
      }else{
        const recipeId=paraMap.get('recipeId')
        this.loadedRecipe=this.recipeService.getRecipe(recipeId);
      }
    })
    
  }
  deleteRecipe(){
    this.alertCtrl.create({
      header:'Are you sure?', message:'Do u really want to delete the recipe?',buttons:[{
        text:'cancel',role:'cancel'
      },{
        text:'Delete',
        handler:()=>{
          this.recipeService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipe'])
        } 
      }]
    }).then(alertEl=>{
      alertEl.present()
    })
    
  }

}
