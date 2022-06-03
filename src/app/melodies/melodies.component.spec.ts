import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MelodiesComponent } from './melodies.component';

describe('MelodiesComponent', () => {
  let component: MelodiesComponent;
  let fixture: ComponentFixture<MelodiesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MelodiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
