import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigurationPageComponent } from './configuration-page/configuration-page.component';
import { QuestionsComponent } from './questions/questions.component';
import { FinalScoreComponent } from './final-score/final-score.component';
import { SelectQuizComponent } from './select-quiz/select-quiz.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationPageComponent,
    QuestionsComponent,
    FinalScoreComponent,
    SelectQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
