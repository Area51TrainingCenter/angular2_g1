import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'my-todo-list',
  template: `
  <h1>La lista en componente</h1>
    {{ todo.title }}
  `
})


export class TodoDetailComponent{
  @Input() todo: Todo;
}
