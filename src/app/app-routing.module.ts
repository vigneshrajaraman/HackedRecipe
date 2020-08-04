import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


const routes: Routes = [
  { path: "", redirectTo: "recipe", pathMatch: "full" },
  {path:"recipe", component:RecipeComponent, children:[{
    path:":id", component:RecipeDetailComponent
  }]},
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
