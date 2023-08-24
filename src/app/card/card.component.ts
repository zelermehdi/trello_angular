import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card: string='';
  @Output() cardClick = new EventEmitter<string>();

  onCardClick() {
    this.cardClick.emit(this.card);
  }
}
