import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  odd:boolean = false;
  even: boolean = false;


  onGameStart(count: number) {
    console.log(count);
    if (count%2===0) {
      this.evenNumbers.push(count);
    }
    else {
      this.even=true;
      this.odd=false;
    }
  }


  // onGameStart(event) {
  //   setInterval(() => this.everySecond.emit("event"), 1000);
  // }
}
