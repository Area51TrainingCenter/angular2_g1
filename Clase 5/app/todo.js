"use strict";
var Todo = (function () {
    function Todo(id, title) {
        this.id = id;
        this.title = title;
        console.log('Se ha creado la lista ' + title);
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map