import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListener} from '@angular/core';

import { FormsModule } from '@angular/forms';


import { TaskComponent } from "../task/task.component";
import { ModalSettingsContentComponent } from '../modal-settings-content/modal-settings-content.component';
import { ModalCreateTaskContentComponent } from '../modal-create-task-content/modal-create-task-content.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDatapickerComponent } from '../modal-datapicker/modal-datapicker.component';
import { TaskService } from '../../services/task.service';
import { ModalTasksListComponent } from '../tasks-list/tasks-list.component';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    TaskComponent,
    FormsModule,
    LogoutComponent,
],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent  {
  chosenDayTasks: string = 'today';
  chosenFilterNavegations: string = 'all'; 
  tasksForRender = Array.from([1]);

  currentScroll: number = 0;
  showComponent: boolean = false;
  scrollLimit: number = 0;
  tasksNumber: number = 4;

  constructor(private modalService: NgbModal, private taskService: TaskService) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(this.currentScroll);
    this.currentScroll = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.scrollLimit = 200;
    this.showComponent = this.currentScroll > this.scrollLimit;

    
    if (this.showComponent && this.tasksNumber > 2 ) {
        window.scrollTo({
          behavior: 'smooth',
          top: 0,
        });
      this.modalService.open(ModalTasksListComponent);     
      this.showComponent = false;
    }
  }

  handlechosenFilterNavegations(value: string) {
    this.chosenFilterNavegations = value;
  }

  handleChosenDayTasks(day: string) {
    this.chosenDayTasks = day;
  }

  openModal(type: string) {
    let modalRef;

    if (type === 'settings') {
      modalRef = this.modalService.open(ModalSettingsContentComponent);
    } else if (type === 'create-task') {
      modalRef = this.modalService.open(ModalCreateTaskContentComponent);     
      modalRef.componentInstance.parentComponent = this;
    } else if (type === 'show-datapicker') {
      modalRef = this.modalService.open(ModalDatapickerComponent);
      modalRef.componentInstance.title = 'Get Tasks by specific date'
    } 
  }

  addNewTask() {
    this.tasksForRender.length++;
  }
}
