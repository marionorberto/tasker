import { Component, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskComponent } from '../task/task.component';


@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [
    TaskComponent,
  ],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class ModalTasksListComponent {
  activeModal = Inject(NgbActiveModal);

  constructor(private modalService: NgbModal ) {

  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
