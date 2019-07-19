import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercalateBlockComponent } from './intercalate-block.component';

describe('IntercalateBlockComponent', () => {
  let component: IntercalateBlockComponent;
  let fixture: ComponentFixture<IntercalateBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntercalateBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercalateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
