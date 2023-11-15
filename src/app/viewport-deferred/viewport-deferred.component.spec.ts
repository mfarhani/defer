import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportDeferredComponent } from './viewport-deferred.component';

describe('ViewportDeferredComponent', () => {
  let component: ViewportDeferredComponent;
  let fixture: ComponentFixture<ViewportDeferredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewportDeferredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewportDeferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
