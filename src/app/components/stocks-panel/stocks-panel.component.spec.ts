import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksPanelComponent } from './stocks-panel.component';

describe('StocksPanelComponent', () => {
  let component: StocksPanelComponent;
  let fixture: ComponentFixture<StocksPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
