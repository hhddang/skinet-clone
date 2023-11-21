import { Component, EventEmitter, Input, Output } from '@angular/core';

type Item = {
  text: string;
  value: string;
};

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss'],
})
export class DropdownFilterComponent {
  @Input() itemList!: Item[];

  @Input() activeValue!: string;

  @Output() select = new EventEmitter<string>();

  changeValue = (value: string) => {
    this.activeValue = value;
    this.select.emit(value);
  };
}
