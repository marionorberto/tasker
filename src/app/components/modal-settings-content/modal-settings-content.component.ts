import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-settings-content',
  standalone: true,
  imports: [],
  templateUrl: './modal-settings-content.component.html',
  styleUrl: './modal-settings-content.component.css'
})
export class ModalSettingsContentComponent {
  activeModal = inject(NgbActiveModal);

	@Input() name: string = '';
}
