import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducycleComponent } from './educycle.component';

describe('EducycleComponent', () => {
  let component: EducycleComponent;
  let fixture: ComponentFixture<EducycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
