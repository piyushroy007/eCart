import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'add-products', component: AddProductsComponent },
  { path: 'viewprod/:id' , component :ViewProductComponent},
  //{ path: 'listprod' , component :ViewAllProductComponent},
  { path: 'searchcat' , component :ViewProductByCategoryComponent},
  { path: 'searchdate' , component :ViewProductByDateComponent},
  { path: 'deleteprod' , component :DeleteProductComponent},
  { path: 'updateprod/:id' , component :UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
