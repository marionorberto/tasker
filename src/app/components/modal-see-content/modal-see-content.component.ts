import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-see-content',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './modal-see-content.component.html',
  styleUrl: './modal-see-content.component.css'
})
export class ModalSeeContentComponent {
  activeModal = inject(NgbActiveModal);
  checked: boolean = false;

  handleCheckTaskClick() {
    this.checked = !this.checked;
  }
}
