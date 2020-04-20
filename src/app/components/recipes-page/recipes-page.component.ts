import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable,  } from 'rxjs';
import { analytics } from 'firebase';
import { Router } from '@angular/router';

import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';


@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
})

export class RecipesPageComponent implements OnInit {
  allRecipes$: Recipe[];
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

     // this.recipeService.getAllRecipes().subscribe(data => {
    //   // console.log(data)
    //   this.allRecipes$ = data.
    //   map(e=>{
    //     return{
    //       id: e.payload.doc.id,
    //       ...e.payload.doc.data() as Recipe
    //     } as Recipe
    //   })
    // })
  };


      // THIS IS AN EXAMPLE WHERE ALL OF THE LOGIC IS NOT IN A SERVICE
    // this.db
    //   .collection('recipes')
    //   .snapshotChanges()
    //   .subscribe((snaps) => {
    //     const recipe = snaps.map((snap) => {
    //       return <any>{
    //         id: snap.payload.doc.id,
    //         ...(snap.payload.doc.data() as Recipe),
    //       };
    //     });
    //     this.allRecipes$ = recipe as any;
    //   });


  ngOnInit(): void {

  }
  recipeDetailsClick(itemId) {
    console.log(itemId);
    this.router.navigate(['recipe-details/',itemId])
  }
}

