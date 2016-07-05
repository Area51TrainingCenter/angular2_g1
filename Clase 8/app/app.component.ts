import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
    selector: 'my-app',
    template: `
      <h1>{{ title }}</h1>
      <a [routerLink] = "['/']">Home</a>
      <a [routerLink] = "['/todo-lists']">Lista de tareas</a>
      <router-outlet></router-outlet>
      `,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
    title = 'Lista de tareas';
}
