import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class RecipeService {

  constructor(private http: HttpClient ) { }
  public url = "http://starlord.hackerearth.com/recipe";
  getAllRecipe(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
