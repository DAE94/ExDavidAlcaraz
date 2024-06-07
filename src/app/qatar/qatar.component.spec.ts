import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QatarComponent } from './qatar.component';

describe('QatarComponent', () => {
  let component: QatarComponent;
  let fixture: ComponentFixture<QatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QatarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
