import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { analytics } from 'firebase';

import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-edit-delete-editonly-recipes-page',
  templateUrl: './edit-delete-editonly-recipes-page.component.html',
  styleUrls: ['./edit-delete-editonly-recipes-page.component.css'],
})
export class EditDeleteEditonlyRecipesPageComponent implements OnInit {
  recipeId: string;
  indivRecipeToUpdate$: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {
    //This is the id from params
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipeId = params.get('id');
    });
    this.recipeService.getRecipeByID(this.recipeId).subscribe((data) => {
      // console.log(data.payload.data())
      // ...data.payload.doc.data() as Recipe
      this.indivRecipeToUpdate$ = data.payload.data() as Recipe;
    });
  }

  ngOnInit(): void {}

  updateItem(recipe:Recipe){
    this.recipeService.updateRecipe(recipe);
    // this.clearState();
  }
}
