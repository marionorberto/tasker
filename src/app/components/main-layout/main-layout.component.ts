import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskComponent } from "../task/task.component";
import { TodayTaskComponent } from "../today-task/today-task.component";
import { YesterdayTaskComponent } from "../yesterday-task/yesterday-task.component";
import { ModalTestComponent } from '../modal-test/modal-test.component';

import { MatDialog, MatDialogModule, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    CommonModule,
    TodayTaskComponent,
    YesterdayTaskComponent,
    TaskComponent,
    ModalTestComponent,
    MatDialogModule,
],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent  {
  chosenDayTasks: string = 'today';

  constructor(private dialog: MatDialog) {}

  handleChosenDateTask(day: string) {
    this.chosenDayTasks = day;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    const dialogRef = this.dialog.open(ModalTestComponent, dialogConfig);

     dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );    
  }
}
