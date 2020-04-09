import { Component, OnInit, Input } from '@angular/core';
import { ReadCategoryService } from 'shared/services/read-category.service';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.css']
})
export class ProductsFilterComponent implements OnInit {
categories$;
@Input('categorySelected') categorySelected;
  constructor(private categoryObj : ReadCategoryService) {
  this.categories$=this.categoryObj.getCategories();

   }

  ngOnInit() {
  }

}
