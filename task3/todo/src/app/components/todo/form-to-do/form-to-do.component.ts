import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IToDo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-form-to-do',
  templateUrl: './form-to-do.component.html',
  styleUrls: ['./form-to-do.component.scss']
})
export class FormToDoComponent implements OnInit {
  todoForm: FormGroup;

  @Output() addToDo = new EventEmitter<IToDo>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required]],
    });
  }

  checkInvalid(input: string) {
    return this.todoForm.controls[input].invalid &&
      (this.todoForm.controls[input].dirty ||
        this.todoForm.controls[input].touched)
  }

  checkValid(input: string) {
    return !this.checkInvalid(input) &&
      this.todoForm.controls[input].value !== '' &&
      this.todoForm.controls[input].value !== null;
  }

  onSubmit() {
    const todo: IToDo = {
      id: new Date().toISOString(),
      title: '',
    };
    for (const key in this.todoForm.controls) {
      todo[key] = this.todoForm.get(key).value.toString().trim();
    }
    this.addToDo.emit(todo);
  }
}
