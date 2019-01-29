import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementToDoComponent } from './element-to-do.component';

describe('ElementToDoComponent', () => {
  let component: ElementToDoComponent;
  let fixture: ComponentFixture<ElementToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
