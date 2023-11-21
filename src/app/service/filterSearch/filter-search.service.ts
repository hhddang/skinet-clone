import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterSearchService {
  private filterSearchSubject = new BehaviorSubject<Object>({});

  filterSearch$ = this.filterSearchSubject.asObservable();

  setFilterSerch(filterSearchObj: Object) {
    const currFilterSearch = this.filterSearchSubject.getValue();
    this.filterSearchSubject.next({ ...currFilterSearch, ...filterSearchObj });
  }
}
