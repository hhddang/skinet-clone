import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  openMobileNav: boolean = false;
  count: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartSource$.subscribe(
      (cart) => (this.count = cart?.length!)
    );
  }

  toggleMobileNav = () => {
    this.openMobileNav = this.openMobileNav == false ? true : false;
  };
}
