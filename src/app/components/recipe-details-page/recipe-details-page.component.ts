import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable,  } from 'rxjs';
import { analytics } from 'firebase';

import { Recipe } from '../../models/recipe';
// import { RecipeService} from '../../services/recipe.service';
@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css'],
})
export class RecipeDetailsPageComponent implements OnInit {
recipeId:string;
indivRecipes$: Recipe;

  constructor(private route: ActivatedRoute, private router: Router, private db:AngularFirestore) {
    //This is the id from params
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recipeId = params.get("id");
    });
      this.db
      .doc
      (`recipes/${this.recipeId}`)
        .valueChanges()
        .subscribe((snap) => {

              // ...snap.payload.doc.data() as Recipe,
              this.indivRecipes$ = snap as Recipe;
console.log(this.indivRecipes$.name)
            })
  }

  ngOnInit(): void {

                                  }
  }

