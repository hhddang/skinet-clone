import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
})
export class SelectFilterComponent {
  activeIndex: number = 0;

  @Input()
  itemList: string[] = [];

  @Output()
  select = new EventEmitter<string>();

  changeIndex = (newIndex: number) => {
    if (newIndex == this.activeIndex) return;
    this.activeIndex = newIndex;
    this.select.emit(this.itemList[newIndex]);
  };
}
