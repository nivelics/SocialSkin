import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotabilizacionComponent } from './potabilizacion.component';

describe('PotabilizacionComponent', () => {
  let component: PotabilizacionComponent;
  let fixture: ComponentFixture<PotabilizacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotabilizacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotabilizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
