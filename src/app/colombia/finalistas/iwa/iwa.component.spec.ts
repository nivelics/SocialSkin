import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IwaComponent } from './iwa.component';

describe('IwaComponent', () => {
  let component: IwaComponent;
  let fixture: ComponentFixture<IwaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IwaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
