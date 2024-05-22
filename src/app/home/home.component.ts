import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HouseComponent } from './houses.data.list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of dataList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
    <!-- <section class="results">
      <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
    </section> -->
  `,
  // styles: ``
  styleUrl: 'home.component.css',
})

export class HomeComponent {
  readonly dataList = new HouseComponent().housingLocationList;
}

/*

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa/' // faa is missing on tutorial

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    // photo: 'https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
    photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
    // photo: `${this.baseUrl}/example-house.jpg`,
    // photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };

*/