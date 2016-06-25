import { Component } from '@angular/core';

export class Todo{
  id: number;
  title: string;
  description: string;
  status: boolean;
}

@Component({
  selector: 'my-app',
  //template: '<h1>  La suma de 2 + 2 es: {{ 2 + 2 }}</h1>'
  template: `
    <h1>{{ titleApp }}</h1>
    <h2> {{ myTodo.title }}</h2>
    <div>
      <label>id: </label> {{ myTodo.id }}
    </div>
    <div>
      <label>Descripción: </label> {{ myTodo.description }}
    </div>
    <div>
      <label>Titulo: </label>
      <input [(ngModel)] = "myTodo.title" placeholder="Escribe el nombre...">
      <b>{{ myTodo.title }}</b>
      <button (click)= "clicker(myTodo)">Click me!</button>
      <h2>{{ message }}</h2>
    </div>
  `
})

export class AppComponent {
  titleApp = "Mi lista de tareas";
  message = "Sin mensaje"
  todoLists: todoLists[] = [
    title: ""
  ]

  myTodo: Todo = {
    id: 1,
    title: 'Pendientes de oficina',
    description: 'Todas las cosas que me faltan por hacer',
    status: true
  }

  clicker(theTodo: Todo){
    //alert('El boton ha sido pulsado... Corran!!!!')
    console.log('La lista de tareas se llama: ' + theTodo.title);

    this.message = "El nombre de la lista se ha actualizado a: " + theTodo.title;

  }

}
