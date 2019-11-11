import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodiesComponent } from './melodies.component';

describe('MelodiesComponent', () => {
  let component: MelodiesComponent;
  let fixture: ComponentFixture<MelodiesComponent>;

  beforeEach(async(() => {
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
