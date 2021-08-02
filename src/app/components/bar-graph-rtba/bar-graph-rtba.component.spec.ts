import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGraphRtbaComponent } from './bar-graph-rtba.component';

describe('BarGraphRtbaComponent', () => {
  let component: BarGraphRtbaComponent;
  let fixture: ComponentFixture<BarGraphRtbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarGraphRtbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphRtbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
