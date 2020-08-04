import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
