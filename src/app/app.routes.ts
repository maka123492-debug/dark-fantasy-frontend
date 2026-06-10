import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list';
import { TodoAdd } from './components/todo-add/todo-add';
import { TodoEdit } from './components/todo-edit/todo-edit';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'edit/:id', component: TodoEdit, data: { sidepanel: true } },
  { path: 'add', component: TodoAdd, data: { sidepanel: true } }
];
