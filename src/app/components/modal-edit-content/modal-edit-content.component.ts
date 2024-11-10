import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-edit-content',
  standalone: true,
  imports: [],
  templateUrl: './modal-edit-content.component.html',
  styleUrl: './modal-edit-content.component.css'
})
export class ModalEditContentComponent {
  activeModal = inject(NgbActiveModal);
}
