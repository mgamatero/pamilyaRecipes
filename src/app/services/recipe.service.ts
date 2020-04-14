import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  recipesCollection:AngularFirestoreCollection<Recipe>;
  constructor(public afs:AngularFirestore) {

  }
}

interface Recipe{
  id?:string;
  addedBy:string;
  directions:string[];
  ingredients:string[];
  name:string;
  type:string;
  image?:string;
}
