import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  openMobileNav: boolean = false;

  toggleMobileNav = () => {
    this.openMobileNav = this.openMobileNav == false ? true : false;
  };
}
