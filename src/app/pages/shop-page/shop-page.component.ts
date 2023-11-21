import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DropdownFilterComponent } from 'src/app/components/dropdown-filter/dropdown-filter.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { SelectFilterComponent } from 'src/app/components/select-filter/select-filter.component';
import { Product } from 'src/app/models/product';
import { FilterSearchService } from 'src/app/service/filterSearch/filter-search.service';
import { ProductService } from 'src/app/service/product/product.service';

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

  filterSearchObj: Object = {
    sort: 'name',
    brand: 'all',
    type: 'all',
    search: '',
    page: 1,
  };

  search: string = '';

  products: Product[] = [];

  @ViewChild('sortFilter') sortFilter!: DropdownFilterComponent;
  @ViewChild('brandFilter') brandFilter!: SelectFilterComponent;
  @ViewChild('typeFilter') typeFilter!: SelectFilterComponent;
  @ViewChild('pagination') pagination!: PaginationComponent;

  constructor(
    private filterSearchService: FilterSearchService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.filterSearchService.setFilterSerch(this.filterSearchObj);
    this.filterSearchService.filterSearch$.subscribe((filterSearch) => {
      this.filterSearchObj = filterSearch;
      console.log(this.filterSearchObj);
    });

    this.products = this.productService.getAll();
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

  changePage = (page: number) => {
    this.filterSearchService.setFilterSerch({ page });
  };

  clearFilterSearch() {
    this.filterSearchService.setFilterSerch({
      sort: 'name',
      brand: 'all',
      type: 'all',
      search: '',
      page: 1,
    });
    this.sortFilter?.changeValue('name');
    this.brandFilter?.changeValue('all');
    this.typeFilter?.changeValue('all');
    this.search = '';
    this.pagination.changePage(1);
  }
}
