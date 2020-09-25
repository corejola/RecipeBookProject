import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;

  // Emit information to the shopping-list component
  @Output() addIngredients = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredients() {
    const newIngredientName = this.nameInput.nativeElement.value
    const newIngredientAmount = this.amountInput.nativeElement.value
    const newIngredient = new Ingredient(newIngredientName, newIngredientAmount)
    this.addIngredients.emit(newIngredient)
  }

}
