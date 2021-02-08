import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input() UID: string;
  @Input() platform: string;


  constructor( private modalCtrl: ModalController) { }
  ngOnInit() { }


  leaveWithoutArguments = () => this.modalCtrl.dismiss();

  leaveWithArguments = () => 
    this.modalCtrl.dismiss({
      UID: "SOFPORRES",
      platform: "Steam"
    })
}
