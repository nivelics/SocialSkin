import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComproagroComponent } from './comproagro.component';

describe('ComproagroComponent', () => {
  let component: ComproagroComponent;
  let fixture: ComponentFixture<ComproagroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComproagroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComproagroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
