import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruequerosComponent } from './truequeros.component';

describe('TruequerosComponent', () => {
  let component: TruequerosComponent;
  let fixture: ComponentFixture<TruequerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruequerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruequerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
