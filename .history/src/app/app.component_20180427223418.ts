import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  onGameStart() {
    setInterval(() => this.everySecond.emit("event"), 1000);
  }
}
