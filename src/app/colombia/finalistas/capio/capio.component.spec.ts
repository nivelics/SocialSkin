import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapioComponent } from './capio.component';

describe('CapioComponent', () => {
  let component: CapioComponent;
  let fixture: ComponentFixture<CapioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
