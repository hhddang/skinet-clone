import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() pageCount!: number;
  showedPageCount: number = 5;
  pages: number[] = [];
  activePage: number = 1;
  minPage: number = 1;
  maxPage!: number;

  @Output() change = new EventEmitter<number>();

  ngOnInit() {
    this.maxPage = Math.min(this.pageCount, this.showedPageCount);
    this.calculatePages();
  }

  calculatePages() {
    this.pages = [];
    for (let i = this.minPage; i <= this.maxPage; i++) {
      this.pages.push(i);
    }
  }

  changePage(page: number) {
    if (page == this.activePage) return;
    this.activePage = page;
    this.minPage = Math.min(
      Math.max(1, this.activePage - 2),
      this.pageCount - this.showedPageCount + 1
    );
    this.maxPage = Math.max(
      Math.min(this.pageCount, this.activePage + 2),
      this.showedPageCount
    );
    this.calculatePages();
    this.change.emit(page);
  }
}
