import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  currentPage: number = 1;
  characters: any[] = [];
  @ViewChild( IonInfiniteScroll ) infiniteScroll: IonInfiniteScroll;

  constructor( private rmService: RickMortyService) { }
  ngOnInit() { 
    this.rmService.getCharacters(this.currentPage)
      .then(data => {
        console.log(data);
        this.characters = data
      })
  }


  loadData = () => {
    if (this.currentPage == 4) {
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return;
    }
    
    this.currentPage++;
    this.rmService.getCharacters(this.currentPage)
      .then(data => data.map(x => this.characters.push(x) ) )
    console.log(this.currentPage);
    console.log(this.characters);
    this.infiniteScroll.complete();
  }
}
