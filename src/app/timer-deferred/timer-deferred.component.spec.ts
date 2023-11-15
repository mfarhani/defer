import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerDeferredComponent } from './timer-deferred.component';

describe('TimerDeferredComponent', () => {
  let component: TimerDeferredComponent;
  let fixture: ComponentFixture<TimerDeferredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerDeferredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimerDeferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
