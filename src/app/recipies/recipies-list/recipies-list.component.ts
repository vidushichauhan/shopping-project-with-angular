import { Component, Input,OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from "@angular/common";
@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is our first recipe', 'https://lilluna.com/wp-content/uploads/2017/10/spanish-rice-resize-6.jpg'),
   new Recipe('Recipe 2','This is my second Recipe','https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg')
  ];

  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
