import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickethelpComponent } from './tickethelp.component';

describe('TickethelpComponent', () => {
  let component: TickethelpComponent;
  let fixture: ComponentFixture<TickethelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TickethelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TickethelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
