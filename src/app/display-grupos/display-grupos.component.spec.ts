import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGruposComponent } from './display-grupos.component';

describe('DisplayGruposComponent', () => {
  let component: DisplayGruposComponent;
  let fixture: ComponentFixture<DisplayGruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayGruposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
