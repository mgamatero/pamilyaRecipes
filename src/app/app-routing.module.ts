import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { AddRecipesPageComponent } from './components/add-recipes-page/add-recipes-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';


const routes: Routes = [
  // {path: '/',component: HomePageComponent},
  {path: 'home',component: HomePageComponent},
  {path: 'recipes',component: RecipesPageComponent},
  {path: 'add',component: AddRecipesPageComponent},
  {path: 'about',component: AboutPageComponent},
  {path: 'login',component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
