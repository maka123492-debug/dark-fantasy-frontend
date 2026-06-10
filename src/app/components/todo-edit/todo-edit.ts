import { Component, effect, inject, input, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';

import { Task } from '@app/models/task.model';
import { TasksService } from '@app/services/tasks.service';

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './todo-edit.html',
  styleUrl: './todo-edit.css'
})
export class TodoEdit {

  private service = inject(TasksService);
  private router = inject(Router);

  id = input<number>();

  title = signal('');
  completed = signal(false);

  constructor() {
    effect(() => {
      const id = this.id();

      if (id) {
        this.service.getTask(id).subscribe(task => {
          this.title.set(task.title);
          this.completed.set(task.completed);
        });
      }
    });
  }

  save() {
    const task: Task = {
      id: this.id()!,
      title: this.title(),
      completed: this.completed()
    };

    this.service.updateTask(task)
      .subscribe(() => {
        alert('Saved');
        this.router.navigate(['/']);
      });
  }

  delete() {
    this.service.deleteTask(this.id()!)
      .subscribe(() => {
        alert('Deleted');
        this.router.navigate(['/']);
      });
  }
}
