import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable,  } from 'rxjs';
import { analytics } from 'firebase';

import { Recipe } from '../../models/recipe';
import { RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-edit-delete-recipes-page',
  templateUrl: './edit-delete-recipes-page.component.html',
  styleUrls: ['./edit-delete-recipes-page.component.css']
})
export class EditDeleteRecipesPageComponent implements OnInit {

  mainDishRecipes$: Recipe[];
  dessertRecipes$: Recipe[];
  appetizerRecipes$: Recipe[];
  otherRecipes$: Recipe[];

  constructor(private db: AngularFirestore, private router: Router, private recipeService:RecipeService ) {
    this.recipeService.getMainDishRecipes().subscribe(data => {
      this.mainDishRecipes$ = data.map(e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Recipe
        } as Recipe
      })
    })
    this.recipeService.getDessertRecipes().subscribe(data => {
      this.dessertRecipes$ = data.map(e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Recipe
        } as Recipe
      })
    })
    this.recipeService.getAppetizerRecipes().subscribe(data => {
      this.appetizerRecipes$ = data.map(e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Recipe
        } as Recipe
      })
    })
    this.recipeService.getOtherRecipes().subscribe(data => {
      this.otherRecipes$ = data.map(e=>{
        return{
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Recipe
        } as Recipe
      })
    })
  };

  ngOnInit(): void {
  }

  deleteRecipe(recipe:Recipe){
    if(confirm(`Are you sure you want to delete ${recipe.name} by ${recipe.addedBy}?`)){
    this.recipeService.deleteRecipe(recipe);
    }
  }

  editRecipeClick(itemId) {
    console.log(itemId);
    this.router.navigate(['edit-delete-editonly', itemId]);
  }
}
