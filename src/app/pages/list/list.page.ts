import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, IonListHeader } from '@ionic/angular';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  constructor( private rmService: RickMortyService) { }
  ngOnInit() { }

  @ViewChild(IonList) ilist: IonList;
  characters = this.rmService.getCharacters(1);
  
  defFunc = (user: any, title:string) => {
    console.log(title, user);
    this.ilist.closeSlidingItems()

  }

  favorite = (user: any) => this.defFunc(user, 'favorite');
  share    = (user: any) => this.defFunc(user, 'share');
  delete   = (user: any) => this.defFunc(user, 'delete');
  
}
