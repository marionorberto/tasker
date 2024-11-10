import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  animations: [
    trigger('shoot', [
    state('start', 
      style({
        transform: 'translateX(130%)',
        backgroundColor: '#e2e8f0',
      })
    ),
    state('end', 
      style({
        transform: 'translateX(0)',
        backgroundColor: '#f1f5f9',
      })
    ),
    transition('start => end', animate('1s 4s ease-in-out'))
    ])
  ],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  animateState: string = 'start';

  ngOnInit(): void {    
    setTimeout(() => {
      this.animateState = 'end';
    }, 4000)
  }

}
