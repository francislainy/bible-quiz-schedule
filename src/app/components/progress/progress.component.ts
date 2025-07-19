import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative h-4 w-full overflow-hidden rounded-full bg-gray-200">
      <div
        class="h-full bg-blue-600 transition-all duration-300 ease-in-out"
        [style.width.%]="value">
      </div>
    </div>
  `
})
export class ProgressComponent {
  @Input() value: number = 0;
}
