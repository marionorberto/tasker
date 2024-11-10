import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditContentComponent } from './modal-edit-content.component';

describe('ModalEditContentComponent', () => {
  let component: ModalEditContentComponent;
  let fixture: ComponentFixture<ModalEditContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEditContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
