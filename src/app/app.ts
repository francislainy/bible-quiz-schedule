import {Component, computed, OnInit, signal, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {readingPlan} from './data/reading-plan';
import {DailyQuizComponent} from './components/daily-quiz/daily-quiz.component';
import {ProgressComponent} from './components/progress/progress.component';
import {ButtonComponent} from './components/button/button.component';
import {CardComponent} from './components/card/card.component';
import {BadgeComponent} from './components/badge/badge.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DailyQuizComponent,
    ProgressComponent,
    ButtonComponent,
    CardComponent,
    BadgeComponent
  ],
  templateUrl: './app.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  currentDay = signal(1);
  completedDays = signal<number[]>([]);
  showQuiz = signal(false);

  ngOnInit() {
    this.loadProgress();
  }

  // Computed properties
  progressPercentage = computed(() => (this.completedDays().length / 365) * 100);

  todaysReading = computed(() => {
    const day = this.currentDay();
    return readingPlan.find(reading => reading.day === day);
  });

  isCurrentDayCompleted = computed(() =>
    this.completedDays().includes(this.currentDay())
  );

  navigationDays = computed(() =>
    Array.from({length: Math.min(20, 365)}, (_, i) => i + 1)
  );

  private loadProgress() {
    try {
      const saved = localStorage.getItem('bible-study-progress');
      if (saved) {
        const progress = JSON.parse(saved);
        this.completedDays.set(progress.completedDays || []);
        this.currentDay.set(progress.currentDay || 1);
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  }

  private saveProgress(day: number, completed: boolean) {
    const currentCompleted = this.completedDays();
    const newCompletedDays = completed
      ? [...currentCompleted, day].filter((d, i, arr) => arr.indexOf(d) === i)
      : currentCompleted.filter(d => d !== day);

    this.completedDays.set(newCompletedDays);

    const progress = {
      completedDays: newCompletedDays,
    };

    try {
      localStorage.setItem('bible-study-progress', JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }

  startQuiz() {
    this.showQuiz.set(true);
  }

  cancelQuiz() {
    this.showQuiz.set(false);
  }

  onQuizComplete(completed: boolean) {
    this.saveProgress(this.currentDay(), completed);
    this.showQuiz.set(false);
  }

  navigateToDay(day: number) {
    this.currentDay.set(day);
    this.showQuiz.set(false);
  }

  getDayButtonClass(day: number): string {
    const isCompleted = this.completedDays().includes(day);
    const isCurrent = day === this.currentDay();

    if (isCompleted) {
      return 'relative bg-green-500 hover:bg-green-600 text-white border-green-500 shadow-md';
    } else if (isCurrent) {
      return 'relative bg-blue-500 hover:bg-blue-600 text-white border-blue-500';
    } else {
      return 'relative bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300';
    }
  }
}
