import { Component, inject, signal } from '@angular/core';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

import { TodoListComponent } from './components/todo-list/todo-list';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    TodoListComponent,
    MatSidenavModule,
    MatButtonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private taskService = inject(TasksService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  protected title = 'Todo List';

  tasks = toSignal(this.taskService.getTasks(), { initialValue: [] });

  isOpen = signal(false);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isOpen.set(this.isSidePanelNeeded());
      });
  }

  private isSidePanelNeeded() {
    return !!this.route.snapshot.firstChild?.data?.['sidepanel'];
  }
}
