import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayuudaComponent } from './wayuuda.component';

describe('WayuudaComponent', () => {
  let component: WayuudaComponent;
  let fixture: ComponentFixture<WayuudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayuudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayuudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
