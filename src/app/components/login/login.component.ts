import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  visible: boolean = true;
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  toggle() {
    this.visible = !this.visible;
  }

  onSubmit() {
    this.authService.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        console.log(res);
        window.location.href = '/tasker/app';
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = 'some error occured';
      }
    })
  }

}
