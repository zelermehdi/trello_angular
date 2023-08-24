import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() list: { title: string, tasks: string[] } = { title: '', tasks: [] };
  newTask: string = '';

  constructor() {}

  addTask() {
    const trimmedTask = this.newTask.trim();
    if (trimmedTask !== '') {
      this.appendTask(trimmedTask);
      this.newTask = ''; 
    }
  }

  private appendTask(task: string) {
    this.list.tasks.push(task);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list.tasks, event.previousIndex, event.currentIndex);
  }
}
