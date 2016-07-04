import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoListComponent } from './todo-list.component';


@Component({
    selector: 'my-app',
    template: `
      <h1>{{ title }}</h1>
      <my-todo-list></my-todo-list>`,
    directives: [TodoListComponent]
})

export class AppComponent {
    title = 'Lista de tareas';
}
