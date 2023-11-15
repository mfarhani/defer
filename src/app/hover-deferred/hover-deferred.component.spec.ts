import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverDeferredComponent } from './hover-deferred.component';

describe('HoverDeferredComponent', () => {
  let component: HoverDeferredComponent;
  let fixture: ComponentFixture<HoverDeferredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverDeferredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoverDeferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
