import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSettingsContentComponent } from './modal-settings-content.component';

describe('ModalSettingsContentComponent', () => {
  let component: ModalSettingsContentComponent;
  let fixture: ComponentFixture<ModalSettingsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSettingsContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSettingsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
