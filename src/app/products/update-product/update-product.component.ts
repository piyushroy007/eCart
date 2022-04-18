import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  prodId = 0;
  prodInfo : Product ;
  constructor(private activatedRoute:ActivatedRoute,private prodServ:ProductServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.prodId = data.id;
      console.log(this.prodId);
    });
    this.prodServ.viewProductByID(this.prodId).subscribe(data=>{
      this.prodInfo = data [0];
      console.log(this.prodInfo);
    })
  }
  // async fetchProdInfo(){
  //   this.prodInfo = await this.prodServ.viewProductByID(this.prodId).toPromise();
  //   console.log(this.prodInfo);
  // }
  updateProd(form){
    const updateProdForm = {
      id:110,
      categoryId : form.value.prod_category,
      name: form.value.prod_name,
      description: form.value.prod_description,
      rating: form.value.prod_rating,
      price: form.value.prod_price,
      prodImg : this.prodInfo.productImg,
      isAvailable : form.value.prod_aval,
      color : form.value.prod_name,
      reviews : form.value.prod_description,
    };
    console.log(updateProdForm);
    this.prodServ.updateProduct(this.prodId,updateProdForm).subscribe(data=>{
      console.log(data,"update service done");
    })
  }

}
