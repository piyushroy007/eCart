import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrderComponent } from './orders/list-order/list-order.component';
import { ViewAllProductComponent } from './products/view-all-product/view-all-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  {
    path: 'prod',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
  { path: 'order', component: ListOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
