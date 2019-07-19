import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalistProjectComponent } from './finalist-project.component';

describe('FinalistProjectComponent', () => {
  let component: FinalistProjectComponent;
  let fixture: ComponentFixture<FinalistProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalistProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalistProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
