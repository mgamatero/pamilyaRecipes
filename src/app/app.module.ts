import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { AddRecipesPageComponent } from './components/add-recipes-page/add-recipes-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HeaderComponent } from './components/home-page/header/header.component';
import { WhatComponent } from './components/home-page/what/what.component';
import { WhyComponent } from './components/home-page/why/why.component';
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { RecipeService } from './services/recipe.service';
import { RecipeDetailsPageComponent } from './components/recipe-details-page/recipe-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    RecipesPageComponent,
    AddRecipesPageComponent,
    MenuComponent,
    FooterComponent,
    LoginPageComponent,
    HeaderComponent,
    WhatComponent,
    WhyComponent,
    NotfoundPageComponent,
    RecipeDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
        FormsModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
