import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  constructor() { }
  ngOnInit() { }

  user = {
    name:'Andres',
    email:'',
    password:''
  }

  handleSubmit = () => console.log(this.user);
  

}
