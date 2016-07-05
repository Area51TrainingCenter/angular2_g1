import { Component } from '@angular/core';
import { ActivatedRoute } from  '@angular/router';
import { Todo } from './todo';

@Component({
  selector: 'my-todo-detail',
  template: `
    <div class="edit">
      <h2>Edición de tarea</h2>
      <div>
        <label>id: </label>{{ id }}
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
  id: any;
  paramsSub: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.paramsSub = this.activatedRoute.params.subscribe(
      params => this.id = params['id']
    )
  }

  ngOnDestroy(){
    this.paramsSub.unsubscribe();
  }
}
