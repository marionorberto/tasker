import { CommonModule } from '@angular/common';
import { Component, Inject, inject, Input, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbActiveModal, NgbCalendar, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-modal-datapicker',
  standalone: true,
  imports: [
    FormsModule,
    NgbDatepickerModule,
    CommonModule,
    JsonPipe,
  ],
  templateUrl: './modal-datapicker.component.html',
  styleUrl: './modal-datapicker.component.css'
})
export class ModalDatapickerComponent{

  activeModal = inject(NgbActiveModal);
  model!: NgbDateStruct;
	date!: { year: number; month: number};
  today = inject(NgbCalendar).getToday();

  @Input() title: string = '';

  getTasks(date: any) {
    console.log(date);
  }

}
