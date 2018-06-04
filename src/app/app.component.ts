import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  calculate(income,drinks,water,trans,toiletries,food){

    income = parseInt(income);
    drinks = parseInt(drinks);
    water = parseInt(water);
    trans = parseInt(trans);
    toiletries = parseInt(toiletries);
    food = parseInt(food);
  

    alert('your change is R' + (income - (drinks + water + trans + toiletries + food)));
  }
}
