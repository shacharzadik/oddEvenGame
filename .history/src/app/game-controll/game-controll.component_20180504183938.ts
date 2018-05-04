import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<number>();
  interval;
  counter:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    
    // this.gameStarted.emit(this.counter);
    this.interval = setInterval(() => {this.gameStarted.emit(this.counter+1);this.counter++;}, 1000);
    
  }

}
