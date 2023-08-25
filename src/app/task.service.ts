import { Injectable } from "@angular/core";
import { Task } from "./task";


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    const id = this.tasks.length + 1;
    const newTask: Task = {
      id,
      title,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }
}
