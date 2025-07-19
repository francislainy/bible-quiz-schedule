import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() class = '';

  get cardClasses(): string {
    return `rounded-lg border border-gray-200 bg-white shadow-sm ${this.class}`;
  }
}
