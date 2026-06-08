import { Component, inject, OnInit, signal } from '@angular/core';
import { Task } from '@app/models/task.model';
import { TasksService } from '@app/services/tasks.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoListComponent implements OnInit {

  private service = inject(TasksService);

  tasks = signal<Task[]>([]);

  ngOnInit(): void {
    this.service.getTasks().subscribe(tasks => {
      this.tasks.set(tasks);
    });
  }
}