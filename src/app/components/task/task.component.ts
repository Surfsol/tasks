import { Component, OnInit } from '@angular/core';
import { Task } from 'src/types/Tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService
      .getTasks()
      .subscribe((tasks: Task[]) => (this.tasks = tasks)); // like returning a promise
  }

  deleteItem(id: string) {
    this.taskService.deleteItem(id).subscribe(
      () =>
        (this.tasks = this.tasks.filter((task: Task) => {
          return id !== task.id;
        }))
    );
  }
}
