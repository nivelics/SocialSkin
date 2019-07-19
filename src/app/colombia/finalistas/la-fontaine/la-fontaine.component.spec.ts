import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaFontaineComponent } from './la-fontaine.component';

describe('LaFontaineComponent', () => {
  let component: LaFontaineComponent;
  let fixture: ComponentFixture<LaFontaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaFontaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaFontaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
