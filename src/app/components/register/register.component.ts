import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  visibleRepeatPassword: boolean =  true;
  visiblePassword: boolean = true;

  togglePassword() {
    this.visiblePassword = !this.visiblePassword;
  }

  toggleRepeatPassword() {
    this.visibleRepeatPassword = !this.visibleRepeatPassword;
  }
}
