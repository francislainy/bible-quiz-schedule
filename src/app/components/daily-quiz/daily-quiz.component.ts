import {Component, computed, EventEmitter, Input, Output, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonComponent} from '../button/button.component';
import {ProgressComponent} from '../progress/progress.component';
import {CardComponent} from '../card/card.component';
import {Quiz} from '../../data/reading-plan';

@Component({
  selector: 'app-daily-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, ButtonComponent, ProgressComponent],
  templateUrl: './daily-quiz.component.html',
})
export class DailyQuizComponent {
  @Input() day!: number;
  @Input() quiz?: Quiz;
  @Output() complete = new EventEmitter<boolean>();
  @Output() cancel = new EventEmitter<void>();

  currentQuestion = signal(0);
  answers: Record<string, any> = {};
  showResults = signal(false);

  progress = computed(() =>
    ((this.currentQuestion() + 1) / (this.quiz?.questions.length || 1)) * 100
  );

  currentQuestionData = computed(() => {
    if (!this.quiz) return null;
    return this.quiz.questions[this.currentQuestion()];
  });

  previousQuestion() {
    const current = this.currentQuestion();
    if (current > 0) {
      this.currentQuestion.update(val => val - 1); // FIXED: Use update to prevent issues
    }
  }

  nextQuestion() {
    if (!this.quiz) return;

    const current = this.currentQuestion();
    const maxIndex = this.quiz.questions.length - 1;

    console.log('Next clicked. Current:', current); // Debug log

    if (current < maxIndex) {
      this.currentQuestion.update(val => val + 1);
    }
  }

  submitQuiz() {
    if (!this.quiz) return;
    this.showResults.set(true);
  }

  completeQuiz() {
    this.complete.emit(true);
  }

  onCancel() {
    this.cancel.emit();
  }

  protected readonly Math = Math;
}
