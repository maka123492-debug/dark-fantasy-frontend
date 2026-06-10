import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css'
})
export class TodoAdd {}
