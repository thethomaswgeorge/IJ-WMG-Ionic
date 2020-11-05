import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor() { }

  regions() {
    return [
      {text: 'National', model: 'national'},
      {text: 'East', model: 'east'},
      {text: 'Southeast', model: 'southeast'},
      {text: 'Midwest', model: 'midwest'},
      {text: 'South Central', model: 'southcentral'},
      {text: 'West', model: 'west'},
      {text: 'International', model: 'international'},
    ];
  }
}
