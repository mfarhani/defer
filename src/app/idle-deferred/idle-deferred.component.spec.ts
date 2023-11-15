import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleDeferredComponent } from './idle-deferred.component';

describe('IdleDeferredComponent', () => {
  let component: IdleDeferredComponent;
  let fixture: ComponentFixture<IdleDeferredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdleDeferredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdleDeferredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
