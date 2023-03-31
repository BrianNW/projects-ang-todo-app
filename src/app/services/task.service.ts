import { Injectable } from '@angular/core';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // call this from the tasks.component.ts file
  //is a function of type Task array
  getTasks(): Task[] {
    return TASKS;
  }
}
