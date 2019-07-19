import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierraGrataComponent } from './tierra-grata.component';

describe('TierraGrataComponent', () => {
  let component: TierraGrataComponent;
  let fixture: ComponentFixture<TierraGrataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierraGrataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierraGrataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
