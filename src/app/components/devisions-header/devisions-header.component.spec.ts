import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisionsHeaderComponent } from './devisions-header.component';

describe('DevisionsHeaderComponent', () => {
  let component: DevisionsHeaderComponent;
  let fixture: ComponentFixture<DevisionsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevisionsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevisionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
