import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPrincipalComponent } from './todo-principal.component';

describe('TodoPrincipalComponent', () => {
  let component: TodoPrincipalComponent;
  let fixture: ComponentFixture<TodoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
