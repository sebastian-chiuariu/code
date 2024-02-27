import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissatgesInputComponent } from './missatges-input.component';

describe('MissatgesInputComponent', () => {
  let component: MissatgesInputComponent;
  let fixture: ComponentFixture<MissatgesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissatgesInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissatgesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
