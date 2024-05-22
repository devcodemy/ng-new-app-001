import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

import {
  CommonModule,
  NgOptimizedImage,
} from '@angular/common';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <section class="listing">
      <img
        width="200"
        height="100"
        priority
        class="listing-photo"
        ngSrc="{{ housingLocation.photo }}"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}

/*

[src]="housingLocation.photo"

const someImageFetch = async (dataUrl: string) => {

  return await fetch(dataUrl,
    {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'localhost',
      }
    }
  );
};

*/