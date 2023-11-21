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

  searchText: string = '';

  constructor() {
    const search = document.getElementById('search');
    search!.addEventListener('change', () => {
      console.log('Click Event Details: ');
    });
  }

  changeSortOption = (newSortOption: string) => {
    console.log('New sort option: ', newSortOption);
  };

  changeBrand = (newBrand: string) => {
    console.log('New brand: ', newBrand);
  };

  changeType = (newType: string) => {
    console.log('New type: ', newType);
  };

  applySearch = () => {
    console.log('New search: ', this.searchText);
  };
}
