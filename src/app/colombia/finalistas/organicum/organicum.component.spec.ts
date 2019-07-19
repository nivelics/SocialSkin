import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicumComponent } from './organicum.component';

describe('OrganicumComponent', () => {
  let component: OrganicumComponent;
  let fixture: ComponentFixture<OrganicumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganicumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
