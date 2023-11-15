import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionDeferredComponent } from './interaction-deferred.component';

describe('InteractionDeferredComponent', () => {
  let component: InteractionDeferredComponent;
  let fixture: ComponentFixture<InteractionDeferredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionDeferredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractionDeferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
