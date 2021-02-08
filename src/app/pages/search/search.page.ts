import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  constructor(private rmService:RickMortyService) { }
  ngOnInit() { 
    this.rmService.getCharacters(1)
      .then(data => this.characters = data)
  }


  searchBarText:string = '';
  characters = [];
  onSearchChange = ({ detail }) => this.searchBarText = detail.value;

}