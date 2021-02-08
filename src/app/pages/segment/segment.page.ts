import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  constructor( private rmService: RickMortyService) { }
  ngOnInit() { }

  myHeros = this.rmService.getHeros();
  selectedWindow:string = '';

  segmentChanged = ({ detail }) => {
    if (detail.value === 'All') {
      this.selectedWindow = '';
      return;
    }
    this.selectedWindow = detail.value;
  }
  
}
