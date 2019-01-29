import { IToDo } from '../../interfaces/todo';
import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { 
  ADD_TODO,
  SUCCESS_ADD_TODO,
  FAIL_ADD_TODO,
  LOAD_TODO,
  SUCCESS_LOAD_TODO,
  FAIL_LOAD_TODO,
  DELETE_TODO,
  SUCCESS_DELETE_TODO,
  FAIL_DELETE_TODO,
} from '../actions/todo'

export interface IToDoState {
  todo: IToDo[],
  loaded: boolean,
  loading: boolean,
  error: boolean,
}

export const INITIAL_STATE: IToDoState = {
  todo: [],
  loaded: false,
  loading: false,
  error: false,
}
export function reducerToDo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        loading: true,
        error: false,
        loaded: false,
      });
    case DELETE_TODO:
      return Object.assign({}, state, {
        loading: true,
        error: false,
        loaded: false,
      });
    case LOAD_TODO:
      return Object.assign({}, state, {
        loading: true,
        error: false,
        loaded: false,
      });
    case SUCCESS_LOAD_TODO:
      return Object.assign({}, state, {
        todo: [...action.toDo],
        loading: false,
        error: false,
        loaded: true,
      });
    case FAIL_LOAD_TODO:
      return Object.assign({}, state, {
        todo: [],
        error: false,
        loading: false,
        loaded: false
      });
    default:
      return state;
  }
}

const getToDoHelper = (state: IToDoState) => state.todo;
const getLoadingToDoHelper = (state: IToDoState) => state.loading;
const getloadedToDoHelper = (state: IToDoState) => state.loaded;


export const getToDoState = createFeatureSelector<IToDoState>('dataToDo');


export const getToDo = createSelector(
  getToDoState,
  getToDoHelper
);

export const getLoadingToDo = createSelector(
  getToDoState,
  getLoadingToDoHelper,
);

export const getLoadedToDo = createSelector(
  getToDoState,
  getloadedToDoHelper,
);