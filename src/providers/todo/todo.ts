import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {

  private todos: any = [];

  constructor(public http: HttpClient) {
    console.log('Hello TodoProvider Provider');
  }

  getTodos(){
    return this.todos;
  }

  addTodo(todo){
    this.todos.push(todo);
  }
}
