import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-create-task-content',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './modal-create-task-content.component.html',
  styleUrl: './modal-create-task-content.component.css'
})
export class ModalCreateTaskContentComponent {
  activeModal = inject(NgbActiveModal);
  @Input() parentComponent: any;
  title: string = '';
  content: string = '';
  errors: string[] = [];

  constructor(private taskService: TaskService) {}

  createNewTask() {
    this.activeModal.dismiss();
    setTimeout(() => {}, 2000);

    this.parentComponent.addNewTask();
    console.log(this.taskService.createTask({title: this.title, content: this.content}));
  }
}
