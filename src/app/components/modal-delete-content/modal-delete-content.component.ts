import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

import  { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-delete-content',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './modal-delete-content.component.html',
  styleUrl: './modal-delete-content.component.css'
})
export class ModalDeleteContentComponent {
  activeModal = inject(NgbActiveModal);

  @Input() parentComponent: any;

  showParentInfo() {
    this.activeModal.dismiss();
    this.parentComponent.removeSelf();
  }
}
