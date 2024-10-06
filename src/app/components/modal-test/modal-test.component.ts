import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import  {
  MatDialogModule,
  MatDialogTitle,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'

@Component({
  selector: 'app-modal-test',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogModule,
    MatFormFieldModule,
  ],
  templateUrl: './modal-test.component.html',
  styleUrl: './modal-test.component.css'
})
export class ModalTestComponent implements OnInit {
 
    form!: FormGroup;
    description:string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<ModalTestComponent>,
        @Inject(MAT_DIALOG_DATA) data: any) {

        this.description = data.description;
    }

    ngOnInit() {
        this.form = this.fb.group({
            description: [this.description, []],
        });
    }

    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }
}
