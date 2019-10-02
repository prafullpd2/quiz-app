import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfigurationPageComponent} from './configuration-page/configuration-page.component';
import {SelectQuizComponent} from './select-quiz/select-quiz.component';
import {QuestionsComponent} from './questions/questions.component';
import {FinalScoreComponent} from './final-score/final-score.component';

const routes: Routes = [
  {  path: 'configuration', component: ConfigurationPageComponent  },
  { path: 'select-quiz', component: SelectQuizComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'final-score', component: FinalScoreComponent },
  { path: '', redirectTo: 'configuration', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
