import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filterStatus: 'all' | 'completed' | 'incomplete' = 'all';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  toggleCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
  }

  noTasksOrNoCompletedTasks(): boolean {
    return this.tasks.length === 0 || (this.filterStatus === 'completed' && !this.tasks.some(task => task.completed));
  }

  filteredTasks(): Task[] {
    if (this.filterStatus === 'completed') {
      return this.tasks.filter((task) => task.completed);
    } else if (this.filterStatus === 'incomplete') {
      return this.tasks.filter((task) => !task.completed);
    } else {
      return this.tasks;
    }
  }

}
