import { Injectable } from '@angular/core';

export interface meal {
  name: string,
  price: number,
  addition: number
}

@Injectable({
  providedIn: 'root'
})
export class MenuBoardService {

  meals: meal[] = [
    {
      name: '雞腿堡',
      price: 60,
      addition: 0
    },
    {
      name: '吉事堡',
      price: 55,
      addition: 0
    },
    {
      name: '鮪魚三明治',
      price: 35,
      addition: 0
    }
  ];

  constructor() {

   }

   getMeals(): meal[] {
    return this.meals;
   }

}
