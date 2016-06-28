import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODOS } from './all-todos';

@Injectable()

export class TodoService{
  getTodos(){
    return Promise.resolve(TODOS);
  }
}
