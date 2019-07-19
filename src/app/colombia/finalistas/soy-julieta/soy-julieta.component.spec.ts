import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyJulietaComponent } from './soy-julieta.component';

describe('SoyJulietaComponent', () => {
  let component: SoyJulietaComponent;
  let fixture: ComponentFixture<SoyJulietaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoyJulietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoyJulietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
