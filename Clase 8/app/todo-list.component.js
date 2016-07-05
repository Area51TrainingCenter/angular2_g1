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
var router_1 = require('@angular/router');
var todo_1 = require('./todo');
var todo_service_1 = require('./todo.service');
var TodoListComponent = (function () {
    function TodoListComponent(todoService) {
        this.todoService = todoService;
    }
    TodoListComponent.prototype.getTodos = function () {
        var _this = this;
        this.todoService.getTodos()
            .then(function (todos) { return _this.todos = todos; });
    };
    TodoListComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    TodoListComponent.prototype.onSelect = function (todo) {
        this.selectedTodo = todo;
        console.log(this.selectedTodo);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', todo_1.Todo)
    ], TodoListComponent.prototype, "todo", void 0);
    TodoListComponent = __decorate([
        core_1.Component({
            selector: 'my-todo-list',
            template: "\n  <h2>Mis pendientes</h2>\n  <ul class=\"todos\">\n    <li *ngFor=\"let todo of todos\"\n      [class.selected]=\"todo === selectedTodo\">\n      <a [routerLink]=\"['/todo-lists/detail', todo.id]\">\n        <span class=\"badge\">{{ todo.id }}</span> {{ todo.title }}\n      </a>\n    </li>\n  </ul>\n\n  <router-outlet></router-outlet>\n  ",
            styles: ["\n      .selected{\n        background-color: SeaGreen;\n        color: white;\n      }\n\n      .todos{\n        margin: 0 0  2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 15em;\n        float: left;\n        color: #333;\n      }\n\n      .todos li{\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: DarkSeaGreen;\n        margin: .5em;\n        padding: .3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n      .todos li.selected:hover {\n          background-color: MidnightBlue !important;\n          color: white;\n        }\n        .todos li:hover {\n          color: #fff;\n          background-color: DarkKhaki;\n          left: .1em;\n        }\n        .todos .text {\n          position: relative;\n          top: -3px;\n        }\n        .todos .badge {\n          display: inline-block;\n          font-size: small;\n          color: white;\n          padding: 0.8em 0.7em 0 0.7em;\n          background-color: DarkSlateGray;\n          line-height: 1em;\n          position: relative;\n          left: -1px;\n          top: -4px;\n          height: 1.8em;\n          margin-right: .8em;\n          border-radius: 4px 0 0 4px;\n        }\n\n    "],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [todo_service_1.TodoService]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map