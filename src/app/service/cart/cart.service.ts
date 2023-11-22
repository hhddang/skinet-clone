import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSource = new BehaviorSubject<Cart | null>(null);
  cartSource$ = this.cartSource.asObservable();

  constructor() {
    const stringCart = localStorage.getItem('cart')?.toString() || '[]';
    this.cartSource.next(JSON.parse(stringCart));
  }

  private isExisted(product: Product): Boolean {
    const cart = this.cartSource.value!;
    if (cart.filter((item) => item.product.name == product.name).length) {
      return true;
    }
    return false;
  }

  private writeCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartSource.value!));
  }

  public addCartItem(product: Product, count: number) {
    const cart = this.cartSource.value!;
    if (this.isExisted(product)) {
      const cartItem = cart.filter(
        (item) => item.product.name == product.name
      )[0];
      cartItem.count += count;
    } else {
      const newCartItem: CartItem = {
        product,
        count,
      };
      cart.push(newCartItem);
    }
    this.cartSource.next(cart);
    this.writeCartToLocalStorage();
  }

  public changeCartItemQuantity(product: Product, count: number) {
    const cart = this.cartSource.value!;
    const cartItem = cart.filter(
      (item) => item.product.name == product.name
    )[0];
    cartItem.count = count;
    this.cartSource.next(cart);
    this.writeCartToLocalStorage();
  }

  public removeCartItem(product: Product) {
    const cart = this.cartSource.value!;
    const newCart = cart.filter((item) => item.product.name != product.name);
    this.cartSource.next(newCart);
    this.writeCartToLocalStorage();
  }
}
