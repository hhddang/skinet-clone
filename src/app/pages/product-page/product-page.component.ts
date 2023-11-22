import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product!: Product;
  count: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.product = this.productService.getById(Number(params['id']));
      }
    });
  }

  changeCount(count: number) {
    if (count < 1) return;
    this.count = count;
  }

  addToCart(product: Product, count: number) {
    //
  }
}
