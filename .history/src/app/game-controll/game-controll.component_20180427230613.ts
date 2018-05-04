import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements OnInit {

  @Output() gameStarted = new EventEmitter();
  counter:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.counter++;
    this.gameStarted.emit(this.counter);
  }

}
