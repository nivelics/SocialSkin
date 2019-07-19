import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspersoresComponent } from './aspersores.component';

describe('AspersoresComponent', () => {
  let component: AspersoresComponent;
  let fixture: ComponentFixture<AspersoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspersoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspersoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
