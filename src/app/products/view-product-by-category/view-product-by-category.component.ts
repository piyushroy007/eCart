import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { Category } from 'src/app/site-layout/category';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css'],
})
export class ViewProductByCategoryComponent implements OnInit {
  categoryId: Category;
  productList: Product;
  noProd = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.categoryId = data.id;
      console.log(this.categoryId);
    });
    this.ps.searchCatProduct(this.categoryId).subscribe((data) => {
      console.log(data);
      this.productList = data;
      if (this.productList) {
        this.noProd = false;
      }
    });
  }

  getStarArray(rating: number): boolean[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating);
    }
    return stars;
  }
}
