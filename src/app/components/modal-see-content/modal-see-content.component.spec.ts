import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSeeContentComponent } from './modal-see-content.component';

describe('ModalSeeContentComponent', () => {
  let component: ModalSeeContentComponent;
  let fixture: ComponentFixture<ModalSeeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSeeContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSeeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
