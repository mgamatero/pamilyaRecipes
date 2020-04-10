import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    WhyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
