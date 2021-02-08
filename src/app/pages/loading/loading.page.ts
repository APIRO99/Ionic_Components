import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  constructor( private loadingCtrl: LoadingController) { }
  ngOnInit() { } 

  loading: HTMLIonLoadingElement;

  onClick = () => {
    this.presentLoading();

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000)
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    this.loading.present();
  }

}
