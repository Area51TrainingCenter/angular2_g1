import { Component, Input, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { TodoDetailComponent } from './todo-detail.component';
import { Todo } from './todo';
import { TodoService } from './todo.service';


@Component({
    selector: 'my-todo-list',
    template: `
  <h2>Mis pendientes</h2>
  <ul class="todos">
    <li *ngFor="let todo of todos"
      [class.selected]="todo === selectedTodo">
      <a [routerLink]="['/todo-lists/detail', todo.id]">
        <span class="badge">{{ todo.id }}</span> {{ todo.title }}
      </a>
    </li>
  </ul>

  <router-outlet></router-outlet>
  `,
    styles: [`
      .selected{
        background-color: SeaGreen;
        color: white;
      }

      .todos{
        margin: 0 0  2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
        float: left;
        color: #333;
      }

      .todos li{
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: DarkSeaGreen;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .todos li.selected:hover {
          background-color: MidnightBlue !important;
          color: white;
        }
        .todos li:hover {
          color: #fff;
          background-color: DarkKhaki;
          left: .1em;
        }
        .todos .text {
          position: relative;
          top: -3px;
        }
        .todos .badge {
          display: inline-block;
          font-size: small;
          color: white;
          padding: 0.8em 0.7em 0 0.7em;
          background-color: DarkSlateGray;
          line-height: 1em;
          position: relative;
          left: -1px;
          top: -4px;
          height: 1.8em;
          margin-right: .8em;
          border-radius: 4px 0 0 4px;
        }

    `],
    directives:[ROUTER_DIRECTIVES],
    providers: [TodoService]
})
export class TodoListComponent implements OnInit {
    @Input() todo: Todo;

    todos: Todo[];
    selectedTodo: Todo;

    constructor(private todoService: TodoService) { }
    getTodos() {
        this.todoService.getTodos()
            .then(todos => this.todos = todos);
    }

    ngOnInit() {
        this.getTodos();
    }

    onSelect(todo: Todo) {
        this.selectedTodo = todo;
        console.log(this.selectedTodo)
    }
}
