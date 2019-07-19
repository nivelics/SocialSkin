import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiotorComponent } from './biotor.component';

describe('BiotorComponent', () => {
  let component: BiotorComponent;
  let fixture: ComponentFixture<BiotorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiotorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
