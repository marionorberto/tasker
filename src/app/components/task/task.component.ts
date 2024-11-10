import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalSeeContentComponent } from '../modal-see-content/modal-see-content.component';
import { ModalEditContentComponent } from '../modal-edit-content/modal-edit-content.component';
import { ModalDeleteContentComponent } from '../modal-delete-content/modal-delete-content.component';

import { trigger, state, animate, style, transition } from '@angular/animations';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
  ],
 animations: [
    trigger('shoot', [
      state('stopped', style({
        transform: 'translateX(0)'
      })),
      state('move', style({
        transform: 'translateX(100%)'
      })),
      transition('stopped => move', animate('800ms ease-in-out'))
    ])
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  checked: boolean = false;
  isVisible: boolean = true;
  change: boolean = false;
  animationState: string = 'stopped';

  constructor(private modalService: NgbModal) {}

  handleCheckTaskClick(): void {
    this.checked = !this.checked;
  }

  openModal(type: string): void {
    let modalRef: NgbModalRef;
    if (type === 'see') {
      modalRef = this.modalService.open(ModalSeeContentComponent);
    } else if (type === 'edit') {
      modalRef = this.modalService.open(ModalEditContentComponent);
    } else if (type === 'delete') {
      modalRef = this.modalService.open(ModalDeleteContentComponent);
      modalRef.componentInstance.parentComponent = this;
    }
  }

  removeSelf() {
    this.animationState = 'move';
    setTimeout(() => {
      this.isVisible = false;
    }, 1500)

  }

  handleChange() {
    this.change = !this.change;
  }
}

