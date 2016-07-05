"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var todo_list_component_1 = require('./todo-list.component');
var todo_detail_component_1 = require('./todo-detail.component');
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'todo-lists',
        component: todo_list_component_1.TodoListComponent,
        children: [
            {
                path: '',
                component: home_component_1.HomeComponent
            },
            {
                path: 'detail/:id',
                component: todo_detail_component_1.TodoDetailComponent
            }
        ]
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map