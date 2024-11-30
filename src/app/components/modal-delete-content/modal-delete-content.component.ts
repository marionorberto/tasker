import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, Input } from '@angular/core';

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
  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if(event.key == 'Enter') {
      this.dismiss();
    }
  }

  @Input() parentComponent: any;

  dismiss() {
    this.activeModal.dismiss();
    this.parentComponent.removeSelf();
  }
}
