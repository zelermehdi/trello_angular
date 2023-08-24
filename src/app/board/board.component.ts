import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  lists = [
    { title: 'À Faire', tasks: ['Task 1', 'Task 2'] },
    { title: 'En Cours', tasks: ['Task 3'] },
    { title: 'Terminé', tasks: ['Task 4', 'Task 5', 'Task 6'] }
  ];
}