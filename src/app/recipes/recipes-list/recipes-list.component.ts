import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is the test', 'https://lh3.googleusercontent.com/-zvQNcXMLvUg/V0_asGdq6_I/AAAAAAAFUVs/Zwk8iXvkQrUIjRaukXy3dtqg6seZpjZwQCCo/s800/raindrop-cake-15.jpg'),
    new Recipe('Gelatin Cake', 'Crazy Gelatin cake yall', 'https://static.boredpanda.com/blog/wp-content/uploads/2020/04/rainbow-gelatin-cake-tsunekawa-japan-5e8d78e06fd71__700.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
