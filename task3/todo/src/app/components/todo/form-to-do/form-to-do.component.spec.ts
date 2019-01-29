import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToDoComponent } from './form-to-do.component';

describe('FormToDoComponent', () => {
  let component: FormToDoComponent;
  let fixture: ComponentFixture<FormToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
