import { Injectable, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private isExisted(product: Product): Boolean {
    const cart = this.getAll();
    if (cart.filter((item) => item.product.name == product.name).length) {
      return true;
    }
    return false;
  }

  private writeCartToLocalStorage(cart: Cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  public getAll(): Cart {
    var stringCart = localStorage.getItem('cart')?.toString() || '[]';
    const cart = <Cart>JSON.parse(stringCart);
    return cart;
  }

  public addCartItem(product: Product, count: number) {
    const cart = this.getAll();
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
    this.writeCartToLocalStorage(cart);
  }

  public changeCartItemQuantity(product: Product, count: number) {
    const cart = this.getAll();
    const cartItem = cart.filter(
      (item) => item.product.name == product.name
    )[0];
    cartItem.count = count;
    this.writeCartToLocalStorage(cart);
  }

  public removeCartItem(product: Product) {
    const cart = this.getAll();
    const newCart = cart.filter((item) => item.product.name != product.name);
    this.writeCartToLocalStorage(newCart);
  }
}
