import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{'Counter: ' + counter}}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
  standalone: false
})

export class CounterComponent implements OnInit {
  public counter: number = 0;

  increaseBy(number: number): void{
    this.counter += number;
  }

  resetCounter(){
    this.counter = 10;
  }

  constructor() { }

  ngOnInit() { }
}
