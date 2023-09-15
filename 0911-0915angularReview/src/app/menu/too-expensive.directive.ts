import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTooExpensive]'
})
export class TooExpensiveDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }

}
