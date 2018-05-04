import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd:boolean = false;
  even: boolean = false;


  onGameStart(count) {
    console.log(count);
    if (count/2===0) {
      this.even=true;
    }
    else {
      this.even=true;
    }
  }


  // onGameStart(event) {
  //   setInterval(() => this.everySecond.emit("event"), 1000);
  // }
}
