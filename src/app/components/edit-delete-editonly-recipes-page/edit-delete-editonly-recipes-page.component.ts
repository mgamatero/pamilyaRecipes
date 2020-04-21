import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { analytics } from 'firebase';

import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-edit-delete-editonly-recipes-page',
  templateUrl: './edit-delete-editonly-recipes-page.component.html',
  styleUrls: ['./edit-delete-editonly-recipes-page.component.css'],
})
export class EditDeleteEditonlyRecipesPageComponent implements OnInit {
  recipeId: string;
  indivRecipeToUpdate$: Recipe;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private fb: FormBuilder, private db: AngularFirestore
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

  ngOnInit(): void {
    this.recipeForm= this.fb.group({
      name: ['', Validators.required],
      addedBy: ['', Validators.required],
      type: ['', Validators.required],
      image: ['',Validators.required],
      ingredients: this.fb.array([this.fb.control('',Validators.required)]),
      instructions: this.fb.array([this.fb.control('',Validators.required)]),
    })
  }

  updateItem(recipe:Recipe){
    this.recipeService.updateRecipe(recipe);
    // this.clearState();
  }

  get ingredients() {
  return this.recipeForm.get('ingredients') as FormArray;
}

addNewIngredient() {
  this.ingredients.push(this.fb.control(''));
}

get instructions() {
  return this.recipeForm.get('instructions') as FormArray;
}

addNewInstruction() {
  this.instructions.push(this.fb.control(''));
}

submitForm() {
  console.warn(this.recipeForm.value.name);
  this.recipeService.addRecipe(this.recipeForm.value);
  this.clearForm();
  alert('Recipe added');
  this.router.navigate(['recipes']);
}

clearForm() {
  this.recipeForm.reset();
  const ingredientControls = <FormArray>(
    this.recipeForm.controls['ingredients']
  );
  for (let i = ingredientControls.length - 1; i >= 0; i--) {
    ingredientControls.removeAt(i);
  }
  const instructionControls = <FormArray>(
    this.recipeForm.controls['instructions']
  );
  for (let i = instructionControls.length - 1; i >= 0; i--) {
    instructionControls.removeAt(i);
  }
}
}





// get ingredients() {
//   return this.recipeForm.get('ingredients') as FormArray;
// }

// addNewIngredient() {
//   this.ingredients.push(this.fb.control(''));
// }

// get instructions() {
//   return this.recipeForm.get('instructions') as FormArray;
// }

// addNewInstruction() {
//   this.instructions.push(this.fb.control(''));
// }

// submitForm() {
//   console.warn(this.recipeForm.value.name);
//   this.recipeService.addRecipe(this.recipeForm.value);
//   this.clearForm();
//   alert('Recipe added');
//   this.router.navigate(['recipes']);
// }

// clearForm() {
//   this.recipeForm.reset();
//   const ingredientControls = <FormArray>(
//     this.recipeForm.controls['ingredients']
//   );
//   for (let i = ingredientControls.length - 1; i >= 0; i--) {
//     ingredientControls.removeAt(i);
//   }
//   const instructionControls = <FormArray>(
//     this.recipeForm.controls['instructions']
//   );
//   for (let i = instructionControls.length - 1; i >= 0; i--) {
//     instructionControls.removeAt(i);
//   }
// }
