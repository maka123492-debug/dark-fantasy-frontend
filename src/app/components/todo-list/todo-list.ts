import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Task } from '@app/models/task.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoListComponent {
  tasks = input<Task[]>();
}
