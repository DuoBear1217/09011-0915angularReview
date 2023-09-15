import {Component, Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'priceDollar'
})
export class PriceDollarPipe implements PipeTransform {

  transform(price: Number, dollarUnit: string): string {
    return (dollarUnit + ' ' + price.toString());
  }

}
