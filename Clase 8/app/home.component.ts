import { Component } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-home',
  template:`
    <h1>Bienvenidos a la aplicación</h1>
    <ul>
    <li *ngFor="let country of countries">
        {{ country.name }}
    </li>
    </ul>
  `,
  providers: [CountriesService]
})

export class HomeComponent {
countries: any
  constructor( countriesService: CountriesService){
    countriesService.countries
    .subscribe(
      countries => this.countries = countries,
      error => console.error('Error ' + error),
      () => console.log(this.countries)
    )
  }

}
