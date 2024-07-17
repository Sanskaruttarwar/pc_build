import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowersupplyComponent } from './powersupply.component';

describe('PowersupplyComponent', () => {
  let component: PowersupplyComponent;
  let fixture: ComponentFixture<PowersupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PowersupplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowersupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
