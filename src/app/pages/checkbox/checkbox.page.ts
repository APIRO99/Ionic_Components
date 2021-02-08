import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  constructor() { }
  ngOnInit() { }

  data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    },
    {
      name: 'danger',
      selected: false
    },
    {
      name: 'warning',
      selected: true
    }
  ]

  onClick = (item: any) => console.log(item);

}
