import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MelodyChartComponent } from './melody-chart.component';

describe('MelodyChartComponent', () => {
  let component: MelodyChartComponent;
  let fixture: ComponentFixture<MelodyChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MelodyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelodyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
