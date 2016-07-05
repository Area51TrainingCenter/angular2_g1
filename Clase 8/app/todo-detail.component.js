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
var TodoDetailComponent = (function () {
    function TodoDetailComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    TodoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
    };
    TodoDetailComponent.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
    };
    TodoDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-todo-detail',
            template: "\n    <div class=\"edit\">\n      <h2>Edici\u00F3n de tarea</h2>\n      <div>\n        <label>id: </label>{{ id }}\n      </div>\n\n    </div>\n  ",
            styles: ["\n    .edit{\n          background-color: LightSalmon;\n          float: left;\n          margin-left: 20px;\n          border: 1px solid #ccc;\n          border-radius: 10px;\n          padding: 20px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], TodoDetailComponent);
    return TodoDetailComponent;
}());
exports.TodoDetailComponent = TodoDetailComponent;
//# sourceMappingURL=todo-detail.component.js.map