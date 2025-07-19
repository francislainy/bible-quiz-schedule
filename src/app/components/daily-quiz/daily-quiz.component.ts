import {Component, Input, Output, EventEmitter, signal, computed} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonComponent} from '../button/button.component';
import {ProgressComponent} from '../progress/progress.component';
import {CardComponent} from '../card/card.component';
import {Quiz, QuizQuestion} from '../../data/reading-plan';

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
  score = signal(0);

  progress = computed(() =>
    ((this.currentQuestion() + 1) / (this.quiz?.questions.length || 1)) * 100
  );

  currentQuestionData = computed(() => {
    if (!this.quiz) return null;
    return this.quiz.questions[this.currentQuestion()];
  });

  maxScore = computed(() => {
    if (!this.quiz) return 0;
    return this.quiz.questions.reduce((total, q) => total + q.points, 0);
  });

  percentage = computed(() =>
    Math.round((this.score() / this.maxScore()) * 100)
  );

  passed = computed(() =>
    this.score() >= this.maxScore() * 0.7
  );

  hasCurrentAnswer(): boolean {
    const question = this.currentQuestionData();
    return question ? !!this.answers[question.id] : false;
  }

  previousQuestion() {
    const current = this.currentQuestion();
    if (current > 0) {
      this.currentQuestion.update(val => val - 1); // FIXED: Use update to prevent issues
    }
  }

  // FIXED: Prevent double increment
  nextQuestion() {
    if (!this.quiz) return;

    const current = this.currentQuestion();
    const maxIndex = this.quiz.questions.length - 1;

    if (current < maxIndex) {
      this.currentQuestion.update(val => val + 1); // FIXED: Use update to prevent double increment
    }
  }

  submitQuiz() {
    if (!this.quiz) return;

    const finalScore = this.calculateScore();
    this.score.set(finalScore);
    this.showResults.set(true);
  }

  completeQuiz() {
    const hasPassed = this.passed();
    this.complete.emit(hasPassed);
  }

  private calculateScore(): number {
    if (!this.quiz) return 0;

    let totalScore = 0;

    this.quiz.questions.forEach(question => {
      const userAnswer = this.answers[question.id];

      if (question.type === 'multiple-choice' || question.type === 'true-false') {
        if (userAnswer === question.correctAnswer) {
          totalScore += question.points;
        }
      } else if (question.type === 'short-answer') {
        // FIXED: Give full points for any non-empty answer in short-answer questions
        if (userAnswer && userAnswer.trim().length > 0) {
          totalScore += question.points;
        }
      }
    });

    return totalScore;
  }

  isQuestionCorrect(question: QuizQuestion): boolean {
    const userAnswer = this.answers[question.id];

    if (question.type === 'short-answer') {
      return userAnswer && userAnswer.trim().length > 0;
    }

    return userAnswer === question.correctAnswer;
  }

  onCancel() {
    this.cancel.emit();
  }

  protected readonly Math = Math;
}
