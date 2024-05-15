import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryStrategiesComponent } from './history-strategies.component';

describe('HistoryStrategiesComponent', () => {
  let component: HistoryStrategiesComponent;
  let fixture: ComponentFixture<HistoryStrategiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryStrategiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
