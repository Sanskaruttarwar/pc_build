import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalharddriveComponent } from './externalharddrive.component';

describe('ExternalharddriveComponent', () => {
  let component: ExternalharddriveComponent;
  let fixture: ComponentFixture<ExternalharddriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExternalharddriveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExternalharddriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
