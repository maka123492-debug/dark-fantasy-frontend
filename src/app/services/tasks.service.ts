import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '@app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private http = inject(HttpClient);

  public getTasks() {
    return this.http.get<Task[]>('http://localhost:8000/tasks');
  }
}
