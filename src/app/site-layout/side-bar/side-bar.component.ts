import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/products/product-service.service';
import { Category } from '../category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  categoryList: Category;
  activeItem: string | number | null = null;
  constructor(
    private productService: ProductServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getCategories().subscribe((data) => {
      this.categoryList = data;
    });
  }
  setActive(itemId: string | number) {
    this.activeItem = itemId;
    if (itemId != 'all' && itemId != 'addprods') {
      this.router.navigate(['/prod/searchcat', itemId]);
    }
  }
}
