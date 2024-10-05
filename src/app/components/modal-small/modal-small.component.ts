import {
  Component,
  Input,
  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-modal-small',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    DialogModule
  ],
  templateUrl: './modal-small.component.html',
  styleUrl: './modal-small.component.css'
})
export class ModalSmallComponent  implements OnInit{
  
  modalOptions: any = {
    drag: false,
    maximize: true,
  }

  @Input() modalTaskData: {
    visible: boolean, position: string
  } = { visible: false, position: 'right'};
  
  ngOnInit(): void {
    console.log('i passed through modal-small');
  }
}
