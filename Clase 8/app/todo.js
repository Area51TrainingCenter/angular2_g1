"use strict";
var Todo = (function () {
    function Todo(id, title) {
        this.id = id;
        this.title = title;
        console.log('Se ha creado una tarea nueva: ' + title);
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map