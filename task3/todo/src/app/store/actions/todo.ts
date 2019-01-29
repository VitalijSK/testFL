import {Action} from '@ngrx/store';
import {IToDo} from '../../interfaces/todo';

export const SUCCESS_LOAD_TODO = '[ToDo] success loading';
export const FAIL_LOAD_TODO = '[ToDo] fail loading';
export const LOAD_TODO = '[ToDo] loading todo';

export const SUCCESS_ADD_TODO = '[ToDo] success add';
export const FAIL_ADD_TODO = '[ToDo] fail add';
export const ADD_TODO = '[ToDo] add todo';

export const SUCCESS_DELETE_TODO = '[ToDo] success delete';
export const FAIL_DELETE_TODO = '[ToDo] fail delete';
export const DELETE_TODO = '[ToDo] delete todo';


export class LoadToDo implements Action {
  readonly type = LOAD_TODO;

  constructor() {}
}
export class LoadSuccessToDo implements Action {
  readonly type = SUCCESS_LOAD_TODO;

  constructor(public toDo: IToDo[]) {}
}
export class LoadFailToDo implements Action {
  readonly type = FAIL_LOAD_TODO;

  constructor() {}
}

export class AddToDo implements Action {
  readonly type = ADD_TODO;

  constructor(public todo: IToDo) {}
}
export class AddSuccessToDo implements Action {
  readonly type = SUCCESS_ADD_TODO;

  constructor(public toDo: IToDo[]) {}
}
export class AddFailToDo implements Action {
  readonly type = FAIL_ADD_TODO;

  constructor() {}
}

export class DeleteToDo implements Action {
  readonly type = DELETE_TODO;

  constructor(public id: string) {}
}
export class DeleteSuccessToDo implements Action {
  readonly type = SUCCESS_DELETE_TODO;

  constructor(public toDo: IToDo[]) {}
}
export class DeleteFailToDo implements Action {
  readonly type = FAIL_DELETE_TODO;

  constructor() {}
}

export type ActionToDo =  LoadToDo | LoadSuccessToDo | LoadFailToDo |
                          AddToDo | AddSuccessToDo | AddFailToDo |
                          DeleteToDo | DeleteSuccessToDo | DeleteFailToDo;
