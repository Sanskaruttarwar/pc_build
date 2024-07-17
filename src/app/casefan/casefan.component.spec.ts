import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasefanComponent } from './casefan.component';

describe('CasefanComponent', () => {
  let component: CasefanComponent;
  let fixture: ComponentFixture<CasefanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CasefanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasefanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
