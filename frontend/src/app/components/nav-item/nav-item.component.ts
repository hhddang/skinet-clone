import { Component, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input()
  path: string = '';
  @Input()
  text: string = '';
  @Input()
  class: string | undefined;

  activePath: string = '/';
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activePath = event.url;
      }
    });
  }
}
