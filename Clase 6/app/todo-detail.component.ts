import { Component, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'my-todo-detail',
  template: `
    <div *ngIf="todo" class="edit">
      <h2>Edición de tarea</h2>
      <h3>{{todo.title}}</h3>
      <div>
        <label>id: </label>{{todo.id}}
      </div>
      <div>
        <label>Título: </label>
        <input [(ngModel)]="todo.title" placeholder="name"/>
      </div>
    </div>
  `,
  styles:[`
    .edit{
          background-color: LightSalmon;
          float: left;
          margin-left: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 20px;
        }
    `]
})
export class TodoDetailComponent {
  @Input() todo: Todo;
}
