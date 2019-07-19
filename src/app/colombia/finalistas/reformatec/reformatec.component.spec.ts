import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReformatecComponent } from './reformatec.component';

describe('ReformatecComponent', () => {
  let component: ReformatecComponent;
  let fixture: ComponentFixture<ReformatecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReformatecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReformatecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
