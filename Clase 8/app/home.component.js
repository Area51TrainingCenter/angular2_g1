"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var countries_service_1 = require('./countries.service');
var HomeComponent = (function () {
    function HomeComponent(countriesService) {
        var _this = this;
        countriesService.countries
            .subscribe(function (countries) { return _this.countries = countries; }, function (error) { return console.error('Error ' + error); }, function () { return console.log(_this.countries); });
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: "\n    <h1>Bienvenidos a la aplicaci\u00F3n</h1>\n    <ul>\n    <li *ngFor=\"let country of countries\">\n        {{ country.name }}\n    </li>\n    </ul>\n  ",
            providers: [countries_service_1.CountriesService]
        }), 
        __metadata('design:paramtypes', [countries_service_1.CountriesService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map