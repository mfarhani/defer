import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmediateDeferredComponent } from './immediate-deferred.component';

describe('ImmediateDeferredComponent', () => {
  let component: ImmediateDeferredComponent;
  let fixture: ComponentFixture<ImmediateDeferredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImmediateDeferredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImmediateDeferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
