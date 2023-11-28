import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterSearch } from 'src/app/models/filterSearch';

@Injectable({
  providedIn: 'root',
})
export class FilterSearchService {
  private filterSearchSubject = new BehaviorSubject<FilterSearch | undefined>(
    undefined
  );

  getFilterSearch() {
    return this.filterSearchSubject.asObservable();
  }

  setFilterSerch(filterSearchObj: Object) {
    const currFilterSearch = this.filterSearchSubject.getValue();
    this.filterSearchSubject.next({
      ...currFilterSearch,
      ...filterSearchObj,
    } as FilterSearch);
  }
}
