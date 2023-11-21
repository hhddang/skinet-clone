import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DropdownFilterComponent } from 'src/app/components/dropdown-filter/dropdown-filter.component';
import { SelectFilterComponent } from 'src/app/components/select-filter/select-filter.component';
import { FilterSearchService } from 'src/app/service/filterSearch/filter-search.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
})
export class ShopPageComponent implements OnInit {
  SORTS = [
    { text: 'Alphabetical', value: 'name' },
    { text: 'Price: Low to High', value: 'price-asc' },
    { text: 'Price: High to Low', value: 'price-desc' },
  ];

  BRANDS = [
    { text: 'All', value: 'all' },
    { text: 'Angular', value: 'angular' },
    { text: 'NetCore', value: 'netcore' },
    { text: 'VS Code', value: 'vs-code' },
    { text: 'React', value: 'react' },
    { text: 'Typescript', value: 'typescript' },
    { text: 'Redis', value: 'redis' },
  ];

  TYPES = [
    { text: 'All', value: 'all' },
    { text: 'Broads', value: 'broads' },
    { text: 'Hats', value: 'hats' },
    { text: 'Boots', value: 'boots' },
    { text: 'Gloves', value: 'gloves' },
  ];

  filterSearchObj = {
    sort: 'name',
    brand: 'all',
    type: 'all',
    search: '',
  };

  search: string = '';

  @ViewChild('sortFilter') sortFilter!: DropdownFilterComponent;
  @ViewChild('brandFilter') brandFilter!: SelectFilterComponent;
  @ViewChild('typeFilter') typeFilter!: SelectFilterComponent;

  constructor(private filterSearchService: FilterSearchService) {}

  ngOnInit(): void {
    this.filterSearchService.setFilterSerch(this.filterSearchObj);
    this.filterSearchService.filterSearch$.subscribe((filterSearch) => {
      console.log(filterSearch);
    });
  }

  changeSort = (sort: string) => {
    this.filterSearchService.setFilterSerch({ sort });
  };

  changeBrand = (brand: string) => {
    this.filterSearchService.setFilterSerch({ brand });
  };

  changeType = (type: string) => {
    this.filterSearchService.setFilterSerch({ type });
  };

  applySearch = () => {
    this.filterSearchService.setFilterSerch({ search: this.search });
  };

  clearFilterSearch() {
    this.filterSearchService.setFilterSerch({
      sort: 'name',
      brand: 'all',
      type: 'all',
      search: '',
    });
    this.sortFilter?.changeValue('name');
    this.brandFilter?.changeValue('all');
    this.typeFilter?.changeValue('all');
    this.search = '';
  }
}
