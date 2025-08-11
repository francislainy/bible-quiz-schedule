import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  OnInit,
  signal,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {readingPlan} from './data/reading-plan';
import {DailyQuizComponent} from './components/daily-quiz/daily-quiz.component';
import {ProgressComponent} from './components/progress/progress.component';
import {ButtonComponent} from './components/button/button.component';
import {CardComponent} from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DailyQuizComponent,
    ProgressComponent,
    ButtonComponent,
    CardComponent
  ],
  templateUrl: './app.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('navigationGrid', { static: false }) navigationGrid?: ElementRef;

  currentDay = signal(1);
  completedDays = signal<number[]>([]);
  showQuiz = signal(false);

  ngOnInit() {
    this.loadProgress();
    this.updateCurrentDayBasedOnProgress();
  }

  ngAfterViewInit() {
    // Scroll to current day after view initialization
    setTimeout(() => this.scrollToCurrentDay(), 100);
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
    Array.from({length: 365}, (_, i) => i + 1)
  );

  // New method to get reading reference for a specific day
  getReadingForDay(day: number): string {
    const reading = readingPlan.find(r => r.day === day);
    return reading?.passage || '';
  }

  // New method to update current day based on progress
  private updateCurrentDayBasedOnProgress() {
    const completed = this.completedDays();
    const today = new Date().toDateString();
    const lastCompletedToday = this.wasCompletedToday(this.currentDay());

    // If current day was completed today, keep showing it
    if (lastCompletedToday) {
      return;
    }

    // Otherwise, find the next incomplete day
    let nextIncompleteDay = 1;
    for (let day = 1; day <= 365; day++) {
      if (!completed.includes(day)) {
        nextIncompleteDay = day;
        break;
      }
    }

    this.currentDay.set(nextIncompleteDay);
  }

  // Check if a day was completed today
  private wasCompletedToday(day: number): boolean {
    try {
      const saved = localStorage.getItem('bible-study-progress');
      if (saved) {
        const progress = JSON.parse(saved);
        const completionDate = progress.completionDates?.[day];
        if (completionDate) {
          const completedDate = new Date(completionDate).toDateString();
          const today = new Date().toDateString();
          return completedDate === today;
        }
      }
    } catch (error) {
      console.error('Error checking completion date:', error);
    }
    return false;
  }

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

    // Get existing progress
    let progress: any = {};
    try {
      const saved = localStorage.getItem('bible-study-progress');
      if (saved) {
        progress = JSON.parse(saved);
      }
    } catch (error) {
      console.error('Error loading existing progress:', error);
    }

    // Update progress with completion dates
    progress.completedDays = newCompletedDays;
    progress.currentDay = this.currentDay();

    if (!progress.completionDates) {
      progress.completionDates = {};
    }

    if (completed) {
      progress.completionDates[day] = new Date().toISOString();
    } else {
      delete progress.completionDates[day];
    }

    try {
      localStorage.setItem('bible-study-progress', JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }

    // Update current day to next incomplete day after completion
    if (completed) {
      this.updateCurrentDayBasedOnProgress();
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
    // Scroll to the selected day
    setTimeout(() => this.scrollToCurrentDay(), 50);
  }

  private scrollToCurrentDay() {
    if (!this.navigationGrid) return;

    const currentDay = this.currentDay();
    const gridElement = this.navigationGrid.nativeElement;
    const dayButton = gridElement.querySelector(`[data-day="${currentDay}"]`) as HTMLElement;

    if (dayButton && gridElement) {
      // Get the button's position relative to the grid container
      const gridRect = gridElement.getBoundingClientRect();
      const buttonRect = dayButton.getBoundingClientRect();

      // Calculate the relative position of the button within the grid
      const relativeTop = buttonRect.top - gridRect.top + gridElement.scrollTop;

      // Calculate scroll position to center the button in the container
      const containerHeight = gridElement.clientHeight;
      const scrollTop = relativeTop - (containerHeight / 2) + (dayButton.offsetHeight / 2);

      // Smoothly scroll within the grid container only
      gridElement.scrollTo({
        top: Math.max(0, scrollTop),
        behavior: 'smooth'
      });
    }
  }

  getDayButtonClass(day: number): string {
    const isCompleted = this.completedDays().includes(day);
    const isCurrent = day === this.currentDay();

    if (isCompleted) {
      return 'relative bg-green-100 hover:bg-green-600 text-green-700 hover:text-white border-green-500 shadow-md';
    } else if (isCurrent) {
      return 'relative bg-blue-500 hover:bg-blue-600 text-white border-blue-500';
    } else {
      return 'relative bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300';
    }
  }
}
