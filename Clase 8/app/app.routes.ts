import { provideRouter, RouterConfig} from '@angular/router';
import { HomeComponent } from './home.component';
import { TodoListComponent } from './todo-list.component';
import { TodoDetailComponent } from './todo-detail.component';


export const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todo-lists',
    component: TodoListComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'detail/:id',
        component: TodoDetailComponent
      }
    ]
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]
