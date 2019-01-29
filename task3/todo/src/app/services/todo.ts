import { Injectable } from '@angular/core';
import { IToDo } from 'src/app/interfaces/todo';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  todo: IToDo[];

  get(): Observable<IToDo[]> {
    this.todo = JSON.parse(localStorage.getItem('todo')) || [];
    return of(this.todo);
  }
  delete(id: string): Observable<IToDo[]> {
    this.todo = this.todo.filter((todo: IToDo) => todo.id !== id);
    this.save();
    return of(this.todo);
  }
  add(todo: IToDo): Observable<IToDo[]> {
    this.todo.push(todo);
    this.save();
    return of(this.todo);
  }
  private save() {
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
}