import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './inputOutput/parent/parent.component';
import { ChildComponent } from './inputOutput/child/child.component';
import { MealsComponent } from './menu/meals/meals.component';
import { BoardComponent } from './menu/board/board.component';
import { CustomerComponent } from './menu/customer/customer.component';
import { PriceDollarPipe } from './menu/price-dollar.pipe';
import { TooExpensiveDirective } from './menu/too-expensive.directive';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Route1Component } from './routeLazy/route1/route1.component';
import { Route2Component } from './routeLazy/route2/route2.component';
import { Route3Component } from './routeLazy/route3/route3.component';

@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    CustomerComponent,
    PriceDollarPipe,
    TooExpensiveDirective,
    BoardComponent,
    ParentComponent,
    ChildComponent,
    Route1Component,
    Route2Component,
    Route3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    CommonModule,
    MatButtonModule
  ],
  providers: [PriceDollarPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
