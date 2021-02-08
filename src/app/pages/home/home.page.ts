import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private menuCtrl: MenuController, private rmService: RickMortyService) { }
  ngOnInit() { }

  components = this.rmService.getMenuOpts()

  showMenu = () => this.menuCtrl.open("first");

}
