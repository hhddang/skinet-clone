import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cart: Cart = [];
  subtotal: number = 0;
  shipping: number = 0;
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartSource$.subscribe((cart) => {
      this.cart = cart!;
      this.subtotal = this.cart.reduce(
        (accum, curr) => accum + curr.count * curr.product.price,
        0
      );
      this.total = this.subtotal + this.shipping;
    });
  }

  descreaseItem(item: CartItem) {
    if (item.count == 1) {
      this.cartService.removeCartItem(item.product);
    } else {
      this.cartService.changeCartItemQuantity(item.product, item.count - 1);
    }
  }

  increaseItem(item: CartItem) {
    this.cartService.changeCartItemQuantity(item.product, item.count + 1);
  }

  removeItem(item: CartItem) {
    this.cartService.removeCartItem(item.product);
  }
}
