import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent implements OnInit {

  @Output gameStarted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

}
