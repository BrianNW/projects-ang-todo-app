import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'todo-app';
  constructor() { }

  ngOnInit(): void {
  }

  // Add our custom button onClick event
  toggleAddTask() {
    console.log('toggled!!');
  }

}
