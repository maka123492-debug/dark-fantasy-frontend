import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { TasksService } from '@app/services/tasks.service';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [RouterModule, FormsModule, MatButtonModule],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css'
})
export class TodoAdd {

  private service = inject(TasksService);
  private router = inject(Router);

  title = signal('');
  completed = signal(false);

  save() {
    this.service.createTask({
      id: 0,
      title: this.title(),
      completed: this.completed()
    }).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
