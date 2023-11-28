import { Component, OnInit, ViewChild } from '@angular/core';
import { DropdownFilterComponent } from 'src/app/components/dropdown-filter/dropdown-filter.component';
import { PaginationComponent } from 'src/app/components/pagination/pagination.component';
import { SelectFilterComponent } from 'src/app/components/select-filter/select-filter.component';
import { FilterSearch } from 'src/app/models/filterSearch';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/service/cart/cart.service';
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
    { text: 'Boards', value: 'boards' },
    { text: 'Hats', value: 'hats' },
    { text: 'Boots', value: 'boots' },
    { text: 'Gloves', value: 'gloves' },
  ];

  filterSearchObj: FilterSearch = {
    sort: 'name',
    brand: 'all',
    type: 'all',
    search: '',
    page: 1,
    productPerPage: 6,
  };

  search: string = '';
  openFilterSearch: boolean = false;

  products: Product[] = [];
  productCount: number | undefined;
  minProductIndex: number = 1;
  maxProductIndex: number = 99;
  pageCount: number = 1;

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
    this.filterSearchService.getFilterSearch().subscribe((filterSearch) => {
      this.filterSearchObj = filterSearch!;
    });

    this.productService.getAll(this.filterSearchObj).subscribe((res) => {
      if (res) {
        this.products = res.products;
        this.productCount = res.count;
        this.minProductIndex = res.productPerPage * (res.page - 1) + 1;
        this.maxProductIndex = (() => {
          if (this.productCount > res.productPerPage) {
            return Math.min(res.productPerPage * res.page, this.productCount);
          }
          return this.productCount;
        })();
        this.pageCount = Math.ceil(this.productCount / res.productPerPage);
      }
    });

    const searchBar = document.getElementById('search');
    searchBar?.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        this.applySearch();
      }
    });
    searchBar?.addEventListener('input', (event) => {
      if (this.search === '') {
        this.applySearch();
      }
    });
  }

  changeSort = (sort: string) => {
    this.filterSearchService.setFilterSerch({ sort });
    this.productService.query(this.filterSearchObj);
  };

  changeBrand = (brand: string) => {
    this.filterSearchService.setFilterSerch({ brand });
    this.productService.query({ ...this.filterSearchObj, page: 1 });
    this.pagination?.changePage(1);
  };

  changeType = (type: string) => {
    this.filterSearchService.setFilterSerch({ type });
    this.productService.query({ ...this.filterSearchObj, page: 1 });
    this.pagination?.changePage(1);
  };

  applySearch = () => {
    this.filterSearchService.setFilterSerch({ search: this.search });
    this.productService.query({ ...this.filterSearchObj, page: 1 });
    this.pagination?.changePage(1);
  };

  changePage = (page: number) => {
    this.filterSearchService.setFilterSerch({ page });
    this.productService.query(this.filterSearchObj);
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
    this.pagination?.changePage(1);
    this.productService.query(this.filterSearchObj);
  }

  toggleFilterSearch() {
    this.openFilterSearch = !this.openFilterSearch;
  }

  applySearchMobile() {
    this.applySearch();
    this.toggleFilterSearch();
  }
}
