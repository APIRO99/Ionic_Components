import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  constructor(private rmService: RickMortyService) { }
  ngOnInit() { }

  characters = this.rmService.getCharacters(1);  
}
