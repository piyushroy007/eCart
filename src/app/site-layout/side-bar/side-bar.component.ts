import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/products/product-service.service';
import { Category } from '../category';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
categoryList : Category ;
  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(data=>{
      this.categoryList = data ;
    });
  }

}
