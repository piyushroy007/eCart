import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private ps:ProductServiceService) { }

  ngOnInit(): void {
  }

  addNewProducts(form){
    console.log(form.value);
    console.log("Form submitted");
    let newProd = {
      id:1101,
      categoryId : form.value.prod_category,
      name: form.value.prod_name,
      description: form.value.prod_description,
      rating: form.value.prod_rating,
      price: form.value.prod_price,
      prodImg : "",
      isAvailable : 1,
      color : form.value.prod_name,
      reviews : form.value.prod_description,
    };
    console.log(newProd);
    this.ps.createProduct(newProd).subscribe(data=>{
      console.log(data);
    });
  }

}
