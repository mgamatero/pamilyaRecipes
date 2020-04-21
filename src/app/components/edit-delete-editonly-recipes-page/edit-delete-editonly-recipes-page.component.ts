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
// console.log(this.indivRecipeToUpdate$)
      // FormArray entries
      // const ingredientControls = <FormArray>(
        //   this.recipeForm.controls['ingredients']
        // );
        // for (let i = ingredientControls.length - 1; i >= 0; i--) {
          //   console.log(ingredientControls[i].value);
          // }

          // this.recipeForm.setValue(this.indivRecipeToUpdate$);



          this.recipeForm.get("name").setValue(this.indivRecipeToUpdate$.name)
          this.recipeForm.get("addedBy").setValue(this.indivRecipeToUpdate$.addedBy)
          this.recipeForm.get("image").setValue(this.indivRecipeToUpdate$.image)
          this.recipeForm.get("type").setValue(this.indivRecipeToUpdate$.type)

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
  }

  // methods for FormArrays in form
  get ingredients() {
  return this.recipeForm.get('ingredients') as FormArray;
}

// methods for FormArrays in form
addNewIngredient() {
  this.ingredients.push(this.fb.control(''));
}

// methods for FormArrays in form
get instructions() {
  return this.recipeForm.get('instructions') as FormArray;
}

// methods for FormArrays in form
addNewInstruction() {
  this.instructions.push(this.fb.control(''));
}



submitForm() {
  console.warn(this.recipeForm.value.name);
  this.recipeService.addRecipe(this.recipeForm.value);
  this.recipeForm.reset();
  alert('Recipe added');
  this.router.navigate(['recipes']);
}

cancelEdit() {
  if(confirm(`Are you sure you want to cancel changes for ${this.indivRecipeToUpdate$.name} by ${this.indivRecipeToUpdate$.addedBy}?`)){
    this.router.navigate(['edit-delete']);
  }
  // this.recipeForm.reset();
  // const ingredientControls = <FormArray>(
  //   this.recipeForm.controls['ingredients']
  // );
  // for (let i = ingredientControls.length - 1; i >= 0; i--) {
  //   ingredientControls.removeAt(i);
  // }
  // const instructionControls = <FormArray>(
  //   this.recipeForm.controls['instructions']
  // );
  // for (let i = instructionControls.length - 1; i >= 0; i--) {
  //   instructionControls.removeAt(i);
  // }
}
}


