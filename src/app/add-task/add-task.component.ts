import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  taskTitle: string = '';

  constructor(private taskService: TaskService) { }

  addTask(): void {
    if (this.taskTitle.trim() !== '') {
      this.taskService.addTask(this.taskTitle);
      this.taskTitle = '';
    }
  }
}
