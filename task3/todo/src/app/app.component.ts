import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { IToDo } from './interfaces/todo';
import { Store } from '@ngrx/store';
import { getToDo, getLoadingToDo, LoadToDo, AddToDo, DeleteToDo } from './store';
import { IToDoState } from './store/reducers/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading$: Observable<boolean>;
  todo$: Observable<IToDo[]>;

  constructor(private store$: Store<IToDoState>) {}

  ngOnInit() {
    this.todo$ = this.store$.select(getToDo);
    this.loading$ = this.store$.select(getLoadingToDo);

    this.store$.dispatch(new LoadToDo());
  }

  addToDo(todo: IToDo) {
    this.store$.dispatch(new AddToDo(todo));
  }

  deleteToDo(id: string) {
    this.store$.dispatch(new DeleteToDo(id));
  }
}
