import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Recipe } from '../models/recipe';
import {Observable, Subscriber} from 'rxjs';
import { of } from 'rxjs';
// import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesCollection: AngularFirestoreCollection<Recipe>;
recipes: Observable<Recipe[]> ;
recipeByID: Observable<Recipe>;


  constructor(public afs: AngularFirestore) {
        this.recipes = this.afs
    .collection('recipes')
    .snapshotChanges()
    .subscribe((snaps) =>{
      const recipes2 = snaps.map((snap) => {
                return <any>{
                  id: snap.payload.doc.id,
                  ...(snap.payload.doc.data() as Recipe),
                };
                this.recipes = recipes2 as any
                console.log(this.recipes)
              });
            }) as any;
              }


//  -----------------------------  all recipes  --------------------------------------
getAllRecipes(){
  return this.recipes
}

// ------------------------------  get 1 recipe based on ID --------------------------
getRecipeByID(id:string){

  this.afs
  .doc(`recipes/${id}`)
  .snapshotChanges()
  .subscribe((snap) =>{

    return<Recipe>{
      id:snap.payload.id,
      ...(snap.payload.data() as Recipe)
    }
    this.recipeByID = snap as any;
  })
    // const recipe = snaps.map((snap) => {
    //           return <any>{
    //             id: snap.payload.doc.id,
    //             ...(snap.payload.doc.data() as Recipe),
    //           };
    //         });

  }
}





