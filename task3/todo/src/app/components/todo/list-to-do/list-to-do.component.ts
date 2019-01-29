import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IToDo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.scss']
})
export class ListToDoComponent {
  @Input() todo: IToDo[];
  @Output() deleteToDo = new EventEmitter<string>();

  constructor() { }

  deleteToDoId(id: string) {
    this.deleteToDo.emit(id);
  }
  trackByFn(index : number, todo : IToDo) {
    return todo.id;
  }

}
