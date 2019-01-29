import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Effect, Actions} from '@ngrx/effects';
import {of} from 'rxjs';
import {map, catchError, mergeMap} from 'rxjs/operators';
import {
  ADD_TODO,
  DELETE_TODO,
  LOAD_TODO,
  LoadFailToDo,
  LoadSuccessToDo,
} from '../actions/todo';
import Swal from 'sweetalert2';
import { IToDo } from 'src/app/interfaces/todo';
import { ToDoService } from 'src/app/services/todo';

@Injectable()
export class ToDoEffects {
  constructor(
              private actions$: Actions,
              private todoService: ToDoService) { }
  @Effect()
  loadToDo$ = this.actions$.ofType(LOAD_TODO).pipe(
    mergeMap(() => this.todoService.get()),
    map((todo: IToDo[]) => new LoadSuccessToDo(todo)),
    catchError(error => {
      Swal('Error', 'error load', 'error');
      return of(new LoadFailToDo())
    }),
  );
  @Effect()
  deleteToDo$ = this.actions$.ofType(DELETE_TODO).pipe(
    mergeMap((data: Action & { id: string }) => this.todoService.delete(data.id)),
    map((todo: IToDo[]) => {
      Swal('todo was deleted');
      return new LoadSuccessToDo(todo);
    }),
    catchError(error => {
      Swal('Error', 'error delete', 'error');
      return of(new LoadFailToDo())
    }),
  );
  @Effect()
  addToDo$ = this.actions$.ofType(ADD_TODO).pipe(
    mergeMap((data: Action & { todo: IToDo }) => this.todoService.add(data.todo)),
    map((todo: IToDo[]) => {
      Swal('todo was added');
      return new LoadSuccessToDo(todo);
    }),
    catchError(error => {
      Swal('Error', 'error add', 'error');
      return of(new LoadFailToDo())
    }),
  );
}