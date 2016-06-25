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
var Todo = (function () {
    function Todo() {
    }
    return Todo;
}());
exports.Todo = Todo;
var AppComponent = (function () {
    function AppComponent() {
        this.titleApp = "Mi lista de tareas";
        this.message = "Sin mensaje";
        this.todoLists = [
            title, ""
        ];
        this.myTodo = {
            id: 1,
            title: 'Pendientes de oficina',
            description: 'Todas las cosas que me faltan por hacer',
            status: true
        };
    }
    AppComponent.prototype.clicker = function (theTodo) {
        //alert('El boton ha sido pulsado... Corran!!!!')
        console.log('La lista de tareas se llama: ' + theTodo.title);
        this.message = "El nombre de la lista se ha actualizado a: " + theTodo.title;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //template: '<h1>  La suma de 2 + 2 es: {{ 2 + 2 }}</h1>'
            template: "\n    <h1>{{ titleApp }}</h1>\n    <h2> {{ myTodo.title }}</h2>\n    <div>\n      <label>id: </label> {{ myTodo.id }}\n    </div>\n    <div>\n      <label>Descripci\u00F3n: </label> {{ myTodo.description }}\n    </div>\n    <div>\n      <label>Titulo: </label>\n      <input [(ngModel)] = \"myTodo.title\" placeholder=\"Escribe el nombre...\">\n      <b>{{ myTodo.title }}</b>\n      <button (click)= \"clicker(myTodo)\">Click me!</button>\n      <h2>{{ message }}</h2>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map