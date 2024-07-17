import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpucoolerComponent } from './cpucooler.component';

describe('CpucoolerComponent', () => {
  let component: CpucoolerComponent;
  let fixture: ComponentFixture<CpucoolerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CpucoolerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpucoolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
