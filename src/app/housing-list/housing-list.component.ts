import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
  @Input() locationList: HousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();
  result: HousingLocation[] = [];

  constructor() {}

  ngOnInit(): void {}

  searchHousingLocation(searchText: string) {
    if (!searchText) return;

    this.result = this.locationList.filter((location) =>
      location.city.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }
}
