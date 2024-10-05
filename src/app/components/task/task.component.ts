import { Component } from '@angular/core';
import { ModalSmallComponent } from '../modal-small/modal-small.component';

import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    ModalSmallComponent,
    CommonModule,
    ButtonModule,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  checked: boolean = false;
  dataToModalTaskEdit: { visible: boolean, position: string } = { visible: false, position: 'right'};
  dataToModalTaskDelete: { visible: boolean, position: string } = { visible: false, position: 'right'};
  dataToModalTaskShow: { visible: boolean, position: string } = { visible: false, position: 'right'};
  
  handleCheckTaskClick(): void {
    this.checked = !this.checked;
  }

  handleEditTask(value: boolean){
    this.dataToModalTaskEdit.visible = value;
  }

  handleDeleteTask(value: boolean){
    this.dataToModalTaskDelete.visible = value;
  }
  
  handleShowTask(value: boolean){
    this.dataToModalTaskShow.visible = value;
  }
}
