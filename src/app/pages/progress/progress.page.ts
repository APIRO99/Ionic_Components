import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  constructor() { }
  ngOnInit() { }

  liveProgress = 0.5;

  rangeChange = ({ detail }) => this.liveProgress = detail.value/100; 
}
