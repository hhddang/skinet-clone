import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss'],
})
export class DropdownFilterComponent {
  @Output()
  select = new EventEmitter<string>();

  changeOption = (option: any) => {
    this.select.emit(option.target.value);
  };
}
