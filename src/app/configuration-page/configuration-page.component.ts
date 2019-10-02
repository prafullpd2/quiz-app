import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.css']
})
export class ConfigurationPageComponent implements OnInit {

  range: FormControl;
  questions: FormControl;

  constructor(private router: Router) {
    sessionStorage.removeItem('queList');
    sessionStorage.removeItem('quizState');
    sessionStorage.removeItem('score');
    sessionStorage.removeItem('currentQue');

    this.questions = new FormControl('10');
    this.range = new FormControl('10');
  }

  ngOnInit() {
  }

  onStartClick() {
      // this.router.navigate(['/select-quiz'], {state: {questions: this.questions.value, range: this.range.value}});
    this.router.navigateByUrl('/select-quiz', {state: {questions: this.questions.value, range: this.range.value}});

  }
}
