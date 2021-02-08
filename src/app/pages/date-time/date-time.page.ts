import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  constructor() { }
  ngOnInit() { }

  birth: Date = new Date();

  updateDate = (event: any) => console.log( new Date(event.detail.value) );

  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text: 'Mundo',
        handler: () => {
          console.log('see ya');
        }
      }
    ]
  }
}
