import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDetailComponent } from './todo-detail.component';


@Component({
  selector: 'my-app',
  template: `
  <my-todo-list [todo]="myTodo"></my-todo-list>

    <h1>{{ titleApp }}</h1>
    <ol>
      <li *ngFor="let task of tasks">
        {{ task }}
      </li>
    </ol>

    <h1>Segunda lista</h1>
    <ol>
      <li *ngFor="let list of lists"
      (mouseenter)="selectList(list)"
      (mouseleave)="selectedList='-'">
        Id: {{ list.id }} - Título: {{ list.title }}
      </li>
    </ol>
    <h1 *ngIf="selectedList != '-' " >La lista seleccionada es {{ selectedList }}</h1>
    <hr>
    <input (keyup)="onKey($event)">
    {{ values }}
  `,
  directives:[TodoDetailComponent]
})

export class AppComponent {
  titleApp = "Mi lista de tareas";
  message = "Sin mensaje";
  myTodo = new Todo(1, 'Pasear al perro');

  selectedList = "-";

  values = ""

  tasks = ['Pasear al perro',
            'Ir al super',
            'Comprar entardas de cine',
            'Ir por un sandwich',
            'Llamar a mis padres',
            'Pagar cuentas',
            'Renovar gimnasio',
            'Dictar clase'];

  lists = [
    new Todo(1, "Pasear al perro"),
    new Todo(2, "Ir por un sandwich"),
    new Todo(3, "Dictar clase"),
    new Todo(4, "Comprar entardas de cine")
  ];

  selectList(list){
    this.selectedList = list.title;
  }

  // onKey(event:any){
  //   this.values = event.target.value;
  // }

  onKey(event:KeyboardEvent){
    this.values = (<HTMLInputElement>event.target).value
  }
}
