import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  constructor() { }
  ngOnInit() {}

  items = Array.from(Array(20).keys());

  doRefresh = ( ev: any ) => {

    setTimeout(() => {
      this.items = this.items.map(item => item + 20);
      ev.target.complete();
    }, 1500);

  }

}
