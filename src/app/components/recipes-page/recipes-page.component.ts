import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable,  } from 'rxjs';
import { analytics } from 'firebase';
import { Router } from '@angular/router';

// import { RecipeService } from '../../services/recipe.service';  -- NOT WORKING YET
import { Recipe } from '../../models/recipe';


@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css'],
})

export class RecipesPageComponent implements OnInit {
  allRecipes$: Observable<Recipe[]>;
  constructor(private db: AngularFirestore, private router: Router ) {

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
        this.allRecipes$ = recipe as any;
      });



  }

  ngOnInit(): void {

  }
  recipeDetailsClick(itemId) {
    console.log(itemId);
    this.router.navigate(['recipe-details/',itemId])
  }
}

