import { Component, EventEmitter, Input, Output } from '@angular/core';

type Item = {
  text: string;
  value: string;
};

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss'],
})
export class SelectFilterComponent {
  @Input() itemList!: Item[];

  @Input() activeValue!: string;

  @Output() select = new EventEmitter<string>();

  changeValue = (value: string) => {
    if (value == this.activeValue) return;
    this.activeValue = value;
    this.select.emit(value);
  };
}
