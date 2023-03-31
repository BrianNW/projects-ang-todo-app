import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../Task';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // used in the tasks component
  // Task[] equals empty array
  tasks: Task[] = [];

  //add taskservice as an argument
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

}
