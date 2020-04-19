import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { RecipeService} from '../../services/recipe.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router} from '@angular/router';
import {Recipe} from '../../models/recipe';

@Component({
  selector: 'app-add-recipes-page',
  templateUrl: './add-recipes-page.component.html',
  styleUrls: ['./add-recipes-page.component.css'],
})
export class AddRecipesPageComponent implements OnInit {
  recipeForm: FormGroup;
  constructor(private fb: FormBuilder, private db: AngularFirestore, private router: Router, private recipeService:RecipeService) {}

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
