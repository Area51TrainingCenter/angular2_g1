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
var todo_1 = require('./todo');
var todo_detail_component_1 = require('./todo-detail.component');
var AppComponent = (function () {
    function AppComponent() {
        this.titleApp = "Mi lista de tareas";
        this.message = "Sin mensaje";
        this.myTodo = new todo_1.Todo(1, 'Pasear al perro');
        this.selectedList = "-";
        this.values = "";
        this.tasks = ['Pasear al perro',
            'Ir al super',
            'Comprar entardas de cine',
            'Ir por un sandwich',
            'Llamar a mis padres',
            'Pagar cuentas',
            'Renovar gimnasio',
            'Dictar clase'];
        this.lists = [
            new todo_1.Todo(1, "Pasear al perro"),
            new todo_1.Todo(2, "Ir por un sandwich"),
            new todo_1.Todo(3, "Dictar clase"),
            new todo_1.Todo(4, "Comprar entardas de cine")
        ];
    }
    AppComponent.prototype.selectList = function (list) {
        this.selectedList = list.title;
    };
    // onKey(event:any){
    //   this.values = event.target.value;
    // }
    AppComponent.prototype.onKey = function (event) {
        this.values = event.target.value;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <my-todo-list [todo]=\"myTodo\"></my-todo-list>\n\n    <h1>{{ titleApp }}</h1>\n    <ol>\n      <li *ngFor=\"let task of tasks\">\n        {{ task }}\n      </li>\n    </ol>\n\n    <h1>Segunda lista</h1>\n    <ol>\n      <li *ngFor=\"let list of lists\"\n      (mouseenter)=\"selectList(list)\"\n      (mouseleave)=\"selectedList='-'\">\n        Id: {{ list.id }} - T\u00EDtulo: {{ list.title }}\n      </li>\n    </ol>\n    <h1 *ngIf=\"selectedList != '-' \" >La lista seleccionada es {{ selectedList }}</h1>\n    <hr>\n    <input (keyup)=\"onKey($event)\">\n    {{ values }}\n  ",
            directives: [todo_detail_component_1.TodoDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map