import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
prodId = 0;
productData : Product ;
  constructor(private activatedRoute:ActivatedRoute,private ps:ProductServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.prodId = data.id;
    })
    this.ps.viewProductByID(this.prodId).subscribe(data=>{
      this.productData = data[0] ;
      console.log(this.productData);
    })

  }

}
