import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todo-edit',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './todo-edit.html',
  styleUrl: './todo-edit.css'
})
export class TodoEdit {}
