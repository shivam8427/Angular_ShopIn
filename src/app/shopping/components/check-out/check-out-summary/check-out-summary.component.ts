import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'shared/models/Shopping-cart';

@Component({
  selector: 'app-check-out-summary',
  templateUrl: './check-out-summary.component.html',
  styleUrls: ['./check-out-summary.component.css']
})
export class CheckOutSummaryComponent {
@Input('shoppingCart') shoppingCart:ShoppingCart ;
  constructor() { 

  }

  ngOnInit() {
  }

}
