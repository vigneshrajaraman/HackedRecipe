import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private recipeService: RecipeService,private router: Router, private activatedRoute:ActivatedRoute) { }
  recipes;
  flag=false;
  ngOnInit(): void {
    
    this.recipeService.getAllRecipe().subscribe(data => {
      this.recipes = data;
    })
  }
  open(recipe){
    console.log(recipe);
    this.router.navigate([recipe.id], {relativeTo:this.activatedRoute, state: {data: recipe}});

  }

}
