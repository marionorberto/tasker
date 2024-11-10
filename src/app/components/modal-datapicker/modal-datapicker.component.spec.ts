import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDatapickerComponent } from './modal-datapicker.component';

describe('ModalDatapickerComponent', () => {
  let component: ModalDatapickerComponent;
  let fixture: ComponentFixture<ModalDatapickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDatapickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalDatapickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
