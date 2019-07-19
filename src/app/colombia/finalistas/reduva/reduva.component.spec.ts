import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduvaComponent } from './reduva.component';

describe('ReduvaComponent', () => {
  let component: ReduvaComponent;
  let fixture: ComponentFixture<ReduvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReduvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
