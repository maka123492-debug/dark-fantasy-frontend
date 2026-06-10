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

  public getTask(id: number) {
    return this.http.get<Task>(
      `http://localhost:8000/tasks/${id}`
    );
  }

  public createTask(task: Task) {
    return this.http.post<Task>(
      'http://localhost:8000/tasks',
      task
    );
  }

  public updateTask(task: Task) {
    return this.http.put<Task>(
      `http://localhost:8000/tasks/${task.id}`,
      task
    );
  }

  public deleteTask(id: number) {
    return this.http.delete(
      `http://localhost:8000/tasks/${id}`
    );
  }
}
