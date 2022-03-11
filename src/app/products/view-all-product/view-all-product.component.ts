import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
productList : Product ;
  constructor(private ps:ProductServiceService) { }

  ngOnInit(): void {
    this.ps.viewProduct().subscribe(data=>{
      this.productList = data ;
    })
  }

}
