import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  path: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.path = this.product.name.toLowerCase().replaceAll(' ', '-');
  }

  addToCart(product: Product) {
    this.cartService.addCartItem(product, 1);
  }
}
