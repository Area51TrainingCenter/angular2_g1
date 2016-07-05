import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()

export class CountriesService{
  countries: any;
  constructor(http:Http){
    this.countries = http.get('https://restcountries.eu/rest/v1/all')
    .map(response => response.json())
  }
}
