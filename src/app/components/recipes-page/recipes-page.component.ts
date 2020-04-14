import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { analytics } from 'firebase';
import { Router } from '@angular/router';

import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe';

// var config = {
//   apiKey: 'AIzaSyDlVCaMD83-3m4dR5UEo1ylMwdg7enUgFE',
//   authDomain: 'mypamilyarecipes.firebaseapp.com',
//   databaseURL: 'https://mypamilyarecipes.firebaseio.com',
//   projectId: 'mypamilyarecipes',
//   storageBucket: 'mypamilyarecipes.appspot.com',
//   messagingSenderId: '549432231169',
//   appId: '1:549432231169:web:bb6953acdff9d06f830700',
//   measurementId: 'G-87D9KPZGNG',
// };

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
})
export class RecipesPageComponent implements OnInit {
  items: Observable<Recipe[]>;
  constructor(private db: AngularFirestore, private router: Router) {
    this.db
      .collection('recipes')
      .snapshotChanges()
      .subscribe((snaps) => {
        const recipe = snaps.map((snap) => {
          return <any>{
            id: snap.payload.doc.id,
            ...(snap.payload.doc.data() as Recipe),
          };
        });
        this.items = recipe as any;
      });
  }

  ngOnInit(): void {}

  recipeDetailsClick(itemId) {
    console.log(itemId);
    this.router.navigate(['recipe-details/',itemId])
  }
}
