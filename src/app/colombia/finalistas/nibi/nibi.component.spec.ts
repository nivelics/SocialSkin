import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NibiComponent } from './nibi.component';

describe('NibiComponent', () => {
  let component: NibiComponent;
  let fixture: ComponentFixture<NibiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NibiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NibiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
