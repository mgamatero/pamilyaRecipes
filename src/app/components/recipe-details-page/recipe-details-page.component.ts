import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-details-page',
  templateUrl: './recipe-details-page.component.html',
  styleUrls: ['./recipe-details-page.component.css'],
})
export class RecipeDetailsPageComponent implements OnInit {
recipeId;



  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
        //This is the id from params
        this.route.paramMap.subscribe((params: ParamMap) => {
          this.recipeId = params.get("id");
        });
  }
}
