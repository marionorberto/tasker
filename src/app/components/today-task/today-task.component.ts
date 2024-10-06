import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-today-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './today-task.component.html',
  styleUrl: './today-task.component.css'
})
export class TodayTaskComponent  {
  chosenFilterNavegations: string = 'all'; 

  handlechosenFilterNavegations(value: string) {
    this.chosenFilterNavegations = value;
  }
}

