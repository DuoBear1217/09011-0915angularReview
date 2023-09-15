import { Component, Pipe, PipeTransform } from '@angular/core';
import { MenuBoardService } from '../menu-board.service';
import { PriceDollarPipe } from '../price-dollar.pipe';
import { TooExpensiveDirective } from '../too-expensive.directive';

export interface meal {
  name: string,
  price: number,
  addition: number
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  meal: meal[] = [];

  constructor(private mealservice: MenuBoardService,private testPipe: PriceDollarPipe) {}

  ngOnInit(): void {
    this.meal = this.mealservice.getMeals();
  }

}
