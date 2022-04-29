import { Component } from '@angular/core';
import { Tab1Page } from '../tab1/tab1.page';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
public async callhist(Tab1Page){
let histo = JSON.parse(localStorage.getItem('mydata'));
console.log(histo);
document.getElementById('dicehistory').innerHTML = histo.toString();

}


  constructor() {}

}
