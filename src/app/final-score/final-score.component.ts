import { Component, OnInit } from '@angular/core';
import {Question} from '../questions/model/question.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-final-score',
  templateUrl: './final-score.component.html',
  styleUrls: ['./final-score.component.css']
})
export class FinalScoreComponent implements OnInit {
  queList: Question[] = [];
  score: number;

  constructor(private router: Router) {
    this.queList = JSON.parse(sessionStorage.getItem('queList')) as Question[];
    this.score = JSON.parse(sessionStorage.getItem('score')) || 0;
    console.log(this.queList);
    sessionStorage.removeItem('queList');
    sessionStorage.removeItem('quizState');
    sessionStorage.removeItem('score');
    sessionStorage.removeItem('currentQue');
    if (!this.queList) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

}
