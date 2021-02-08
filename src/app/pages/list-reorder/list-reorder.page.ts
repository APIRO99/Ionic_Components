import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  constructor() { }
  ngOnInit() { }

  characters = ["Flash", "Superman", "Mujer Maravilla", "Ironman", "Thor"]
  listEnabled:boolean = false;

  doReorder = (event: any) => {
    const movedElement = this.characters.splice(event.detail.from, 1)[0];
    this.characters.splice(event.detail.to, 0, movedElement);
    event.detail.complete();

    console.log(this.characters);
  }

}
