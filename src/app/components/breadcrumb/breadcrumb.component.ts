import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  keys: string[] = [];
  paths: string[] = [];
  @Input() activeTitle?: string;

  ngOnInit() {
    this.keys = ['home', ...window.location.pathname.split('/').slice(1)];
    if (this.activeTitle) this.keys[this.keys.length - 1] = this.activeTitle;
    this.keys.forEach((key, index) => {
      if (index == 0) {
        this.paths.push('');
      } else {
        this.paths.push(this.paths[index - 1] + '/' + key);
      }
    });
  }
}
