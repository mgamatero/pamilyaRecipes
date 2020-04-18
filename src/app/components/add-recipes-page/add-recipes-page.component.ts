import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-add-recipes-page',
  templateUrl: './add-recipes-page.component.html',
  styleUrls: ['./add-recipes-page.component.css'],
})
export class AddRecipesPageComponent implements OnInit {
  recipeForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      addedBy: ['', Validators.required],
      type: ['', Validators.required],
      image: [''],
      ingredients: this.fb.array([this.fb.control('')]),
      instructions: this.fb.array([this.fb.control('')]),
    });
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

  onSubmit() {
    console.warn(this.recipeForm.value.name);
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
