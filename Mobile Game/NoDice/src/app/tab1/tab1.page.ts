import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public async rollADice(faces){
    let randomNum = Math.floor(Math.random()*faces) + 1;
    console.log(randomNum);
    document.getElementById('diceResult').innerHTML = randomNum.toString();


  }

  public async rollCustom(customvalue){

    let customrandom = Math.floor(Math.random()*customvalue)
    console.log(customrandom);
    document.getElementById('diceResult').innerHTML = customrandom.toString();
  }
  constructor() {}

}

