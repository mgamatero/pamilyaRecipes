import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Recipe } from '../models/recipe';
import { Observable, Subscriber } from 'rxjs';
import { of } from 'rxjs';
// import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesCollection: AngularFirestoreCollection<Recipe>;
  recipes: Observable<Recipe[]>;
  recipeByID: Observable<Recipe>;
  recipeDocument: AngularFirestoreDocument<Recipe>;


  constructor(public afs: AngularFirestore) {}

  //  -----------------------------  all recipes  --------------------------------------
  getAllRecipes() {
    return this.afs.collection('recipes',
      ref=>ref.orderBy('name')).snapshotChanges();
  }
  //  -----------------------------  all recipes  --------------------------------------
  getMainDishRecipes() {
    return this.afs.collection('recipes',
      ref=>ref.where('type','==','Main dish')).snapshotChanges();
  }
  //  -----------------------------  all recipes  --------------------------------------
  getDessertRecipes() {
    return this.afs.collection('recipes',
    ref=>ref.where('type','==','Dessert')).snapshotChanges();
  }
  //  -----------------------------  all recipes  --------------------------------------
  getAppetizerRecipes() {
    return this.afs.collection('recipes',
    ref=>ref.where('type','==','Appetizer')).snapshotChanges();
  }
  //  -----------------------------  all recipes  --------------------------------------
  getOtherRecipes() {
    return this.afs.collection('recipes',
    ref=>ref.where('type','==','Other')).snapshotChanges();
  }

  // ------------------------------  get 1 recipe based on ID --------------------------
  getRecipeByID(id: string) {
    return this.afs.doc(`recipes/${id}`).snapshotChanges();
  }

  //------------------------------  add recipe ---------------------------------------
  addRecipe(recipeFromForm: any){
    // workaround for empty doc issue
    const id = this.afs.createId();

    this.afs
    .collection('recipes')
    .doc(id)
    .set(recipeFromForm as Recipe)
    .then(()=>{
      alert(`${recipeFromForm} added`)
    })
  }

//-------------------------------- delete recipe --------------------------------------
deleteRecipe(recipe:Recipe){
  this.recipeDocument = this.afs.doc(`recipe/${recipe.id}`);
  this.recipeDocument.delete();
}




}

// export class RecipeService {
//   recipesCollection: AngularFirestoreCollection<Recipe>;
// recipes: Observable<Recipe[]> ;
// recipeByID: Observable<Recipe>;

//   constructor(public afs: AngularFirestore) {
//         this.recipes = this.afs
//     .collection('recipes')
//     .snapshotChanges()
//     .subscribe((snaps) =>{
//       const recipes2 = snaps.map((snap) => {
//                 return <any>{
//                   id: snap.payload.doc.id,
//                   ...(snap.payload.doc.data() as Recipe),
//                 };
//                 this.recipes = recipes2 as any
//                 console.log(this.recipes)
//               });
//             }) as any;
//               }

// //  -----------------------------  all recipes  --------------------------------------
// getAllRecipes(){
//   return this.recipes
// }

// // ------------------------------  get 1 recipe based on ID --------------------------
// getRecipeByID(id:string){

//   this.afs
//   .doc(`recipes/${id}`)
//   .snapshotChanges()
//   .subscribe((snap) =>{

//     return<Recipe>{
//       id:snap.payload.id,
//       ...(snap.payload.data() as Recipe)
//     }
//     this.recipeByID = snap as any;
//   })
//     // const recipe = snaps.map((snap) => {
//     //           return <any>{
//     //             id: snap.payload.doc.id,
//     //             ...(snap.payload.doc.data() as Recipe),
//     //           };
//     //         });

//   }
// }
