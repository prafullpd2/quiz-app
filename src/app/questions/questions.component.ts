import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Question} from './model/question.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  currentQueNumber: number;
  totalQuestions: number;
  score = 0;
  questionsLeft: number;
  range: number;
  operators =  ['+', '-', '/', '*'];
  question: Question = null;
  queList: Question[] = [];
  answer: FormControl;
  constructor( private router: Router) {
    this.answer = new FormControl( null);
    let state = sessionStorage.getItem('quizState');
    this.queList = JSON.parse(sessionStorage.getItem('queList')) as Question[] || [];
    if (state) {
      state = JSON.parse(state);
      this.range = +(state as any).range;
      this.totalQuestions = +(state as any).questions;
    /*  this.question = this.queList && this.queList.length < this.totalQuestions ?
        this.generateNextQue() : this.queList[this.queList.length - 1];*/
      this.question = JSON.parse(sessionStorage.getItem('currentQue')) || this.generateNextQue();
      this.score = JSON.parse(sessionStorage.getItem('score')) || 0;
      sessionStorage.setItem('currentQue', JSON.stringify(this.question));

      // this.queList.push(this.question);
      this.currentQueNumber = this.question.id;
      this.updateInfo();

    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    console.log(this.question);
  }
  generateNextQue(): Question {
    const id = this.queList.length + 1;
    const leftOperand = this.getRandomInt(0, this.range + 1);
    const operation = this.operators[this.getRandomInt(0, this.operators.length )];
    const rightOperator = operation === '/' ? this.getRandomInt(1, this.range + 1) : this.getRandomInt(0, this.range + 1);
    const answer = Math.round(eval(leftOperand + operation + rightOperator) * 100) / 100  ;
    return {
      leftOperand,
      rightOperand: rightOperator,
      answer,
      id,
      operation
    };
  }
  updateInfo() {
    this.questionsLeft = this.totalQuestions - this.currentQueNumber;
  }
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }

  onNextClick() {
    this.question.usersAnswer = this.answer.value;
    this.queList.push(this.question);
    sessionStorage.setItem('queList', JSON.stringify(this.queList));
    this.evaluate();
    sessionStorage.setItem('score', JSON.stringify(this.score));

    this.answer.reset();
    this.question = this.generateNextQue();
    this.currentQueNumber = this.question.id;
    this.updateInfo();
    sessionStorage.setItem('currentQue', JSON.stringify(this.question));
  }
  evaluate() {
    if (this.question.usersAnswer === this.question.answer) {
      this.score++;
    }
  }

  onSubmit() {
    this.question.usersAnswer = this.answer.value;
    this.queList.push(this.question);
    sessionStorage.setItem('queList', JSON.stringify(this.queList));
    this.evaluate();
    sessionStorage.setItem('score', JSON.stringify(this.score));
    this.router.navigate(['/final-score']);
  }

  onKeyPress(event: KeyboardEvent) {
    const pattern = /[0-9\.\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
