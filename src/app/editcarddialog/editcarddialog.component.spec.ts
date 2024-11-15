import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcarddialogComponent } from './editcarddialog.component';

describe('EditcarddialogComponent', () => {
  let component: EditcarddialogComponent;
  let fixture: ComponentFixture<EditcarddialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditcarddialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditcarddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
