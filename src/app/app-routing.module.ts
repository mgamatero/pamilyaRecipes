import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { AddRecipesPageComponent } from './components/add-recipes-page/add-recipes-page.component';
import { EditDeleteRecipesPageComponent } from './components/edit-delete-recipes-page/edit-delete-recipes-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component';
import { RecipeDetailsPageComponent } from './components/recipe-details-page/recipe-details-page.component';
import { EditDeleteEditonlyRecipesPageComponent } from './components/edit-delete-editonly-recipes-page/edit-delete-editonly-recipes-page.component';


const routes: Routes = [
  { path: "", component: HomePageComponent },
  {path: 'home',component: HomePageComponent},
  {path: 'recipes',component: RecipesPageComponent},
  {path: 'add',component: AddRecipesPageComponent},
  {path: 'edit-delete',component: EditDeleteRecipesPageComponent},
  {path: 'edit-delete-editonly/:id',component: EditDeleteEditonlyRecipesPageComponent},
  {path: 'about',component: AboutPageComponent},
  {path: 'login',component: LoginPageComponent},
  {path: 'recipe-details/:id',component: RecipeDetailsPageComponent},
  {path: '**',component: NotfoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
