import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasker';
  showCardNewMessage: boolean = false;

  constructor(private primeNgConfig: PrimeNGConfig) {}
  ngOnInit() {
    this.primeNgConfig.ripple = true;
  }
}
