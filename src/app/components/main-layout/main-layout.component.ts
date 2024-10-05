import { AfterViewInit, Component, ComponentRef, ElementRef, ViewChild } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { ModalSmallComponent } from "../modal-small/modal-small.component";
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TodayTaskComponent } from "../today-task/today-task.component";
import { YesterdayTaskComponent } from "../yesterday-task/yesterday-task.component";
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterLinkActive,
    FormsModule,
    CommonModule,
    ModalSmallComponent,
    TodayTaskComponent,
    YesterdayTaskComponent,
    ButtonModule,
    CalendarModule,
    TaskComponent
],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent  {

  dataToModalTask: { visible: boolean, position: string } = { visible: false, position: ''};   
  dateTasks: string[] = ['yesterday', 'today', 'any'] ;
  chosenDayTasks: string = this.dateTasks[1];
  dateCalendar: string = '04/10/24';
  taskComponentRef!: ComponentRef<TaskComponent>

  @ViewChild('inputCalendar', { static: false }) inputDate!: ElementRef;

  handleCreateTask(visible: boolean) {
    this.dataToModalTask.visible = visible;
  }

  handleChosenDateTask(day: string) {
    this.chosenDayTasks = day;
  }

  onDateChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const selectedDate = inputElement.value;
    console.log('Selected Date:', selectedDate);
  }

  destroyTask() {
    if(this.taskComponentRef)
    this.taskComponentRef.destroy();

    console.log('333');
  }
}
