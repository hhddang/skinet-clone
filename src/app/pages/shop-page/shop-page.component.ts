import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
})
export class ShopPageComponent {
  brands: string[] = [
    'All',
    'Angular',
    'NetCore',
    'VS Code',
    'React',
    'Typescript',
    'Redis',
  ];

  types: string[] = ['All', 'Boards', 'Hats', 'Boots', 'Gloves'];

  changeSortOption = (newSortOption: string) => {
    console.log('New sort option: ', newSortOption);
  };

  changeBrand = (newBrand: string) => {
    console.log('New brand: ', newBrand);
  };

  changeType = (newType: string) => {
    console.log('New type: ', newType);
  };
}
