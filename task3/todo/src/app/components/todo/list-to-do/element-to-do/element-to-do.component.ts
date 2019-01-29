import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IToDo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-element-to-do',
  templateUrl: './element-to-do.component.html',
  styleUrls: ['./element-to-do.component.scss']
})
export class ElementToDoComponent {
  @Input() todo : IToDo;
  @Output() deleteId = new EventEmitter<string>();

  constructor() { }

  deleteToDo() {
    this.deleteId.emit(this.todo.id);
  }
}
