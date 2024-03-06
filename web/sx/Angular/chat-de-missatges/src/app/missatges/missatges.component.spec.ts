import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissatgesComponent } from './missatges.component';

describe('MissatgesComponent', () => {
  let component: MissatgesComponent;
  let fixture: ComponentFixture<MissatgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissatgesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissatgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
