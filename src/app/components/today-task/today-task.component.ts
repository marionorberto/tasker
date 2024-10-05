import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ModalSmallComponent } from '../modal-small/modal-small.component';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-today-task',
  standalone: true,
  imports: [
    ModalSmallComponent,
    ButtonModule,
    CalendarModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './today-task.component.html',
  styleUrl: './today-task.component.css'
})
export class TodayTaskComponent  {
  dataToModalTask: { visible: boolean, position: string } = { visible: false, position: ''};   
  chosenFilterNavegations: string = 'all'; 
  isInputDateShown: boolean = false;
  dateCalendar: string = '04/10/24';


  @ViewChild('inputDate', { static: false }) inputDate!: ElementRef;

  showInputDate() {
    this.isInputDateShown = !this.isInputDateShown;
  }

  onDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const selectedDate = inputElement.value;
    console.log('Selected Date:', selectedDate);
  }

  handleCreateTask(visible: boolean) {
    this.dataToModalTask.position = 'right';
    this.dataToModalTask.visible = visible;
  }

  handlechosenFilterNavegations(value: string) {
    this.chosenFilterNavegations = value;
  }
}

