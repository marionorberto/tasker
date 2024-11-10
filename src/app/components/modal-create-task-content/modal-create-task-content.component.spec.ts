import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateTaskContentComponent } from './modal-create-task-content.component';

describe('ModalCreateTaskContentComponent', () => {
  let component: ModalCreateTaskContentComponent;
  let fixture: ComponentFixture<ModalCreateTaskContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreateTaskContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCreateTaskContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
