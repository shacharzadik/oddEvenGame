import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  onGameStart(count) {
    console.log(count);
  }


  // onGameStart(event) {
  //   setInterval(() => this.everySecond.emit("event"), 1000);
  // }
}
