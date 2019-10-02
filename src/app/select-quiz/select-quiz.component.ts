import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-select-quiz',
  templateUrl: './select-quiz.component.html',
  styleUrls: ['./select-quiz.component.css']
})
export class SelectQuizComponent implements OnInit {

  // state$: Observable<object>;
  state: {};
  constructor( private activatedRoute: ActivatedRoute, private location: Location, private router: Router) {
  }

  ngOnInit(): void {
      this.state = this.getState();
  }

  getState() {

    const state = this.location.getState();
    if (state && (state as any).range) {
      sessionStorage.setItem('quizState', JSON.stringify(state));

      return this.location.getState();
    } else {
      return JSON.parse(sessionStorage.getItem('quizState'));
    }
  }

  onStartQuiz() {
    this.router.navigate(['/questions']);
  }
}
