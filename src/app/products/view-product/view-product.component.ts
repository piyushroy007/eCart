import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
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
idToDelete :any;
  constructor(private activatedRoute:ActivatedRoute,
              private ps:ProductServiceService,
              private routes:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.prodId = data.id;
    })
    this.ps.viewProductByID(this.prodId).subscribe(data=>{
      this.productData = data[0] ;
      console.log(this.productData);
    })

  }
  // UpdateID(){
  //   this.routes.navigate(['prod',"updateprod",this.prodId]);
  // }
  deleteItem(item){
    this.idToDelete = item.id;
    this.ps.deleteProduct(this.idToDelete).subscribe(data=>{
      console.log(data.id,this.idToDelete,data);
      if(data.id==this.idToDelete){
        alert(item.name+"Deleted");
      }
    })
  }

}
