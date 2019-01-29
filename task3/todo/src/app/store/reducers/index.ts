import {
  ActionReducerMap,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import {
  IToDoState,
  reducerToDo
} from './todo';
export {
  getToDo,
  getLoadingToDo,
  reducerToDo,
} from './todo';

export interface State {
  dataToDo: IToDoState;
}

export const reducers: ActionReducerMap<State> = {
  dataToDo: reducerToDo,
};


export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];