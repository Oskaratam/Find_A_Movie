import { Injectable, OnInit, Self } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { Option } from './option.interface';
import { ProgressionBarComponent } from '../first-section/progression-bar/progression-bar.component';
import { FindMovieService } from './find-movie.service';


@Injectable({
  providedIn: 'root'
  
})
export class AppStepsService implements OnInit {

  constructor(private config: ConfigurationService, private findMovie: FindMovieService) { }
  

  currentStep : number = 1;
  totalSteps : number = 4;

  genres: Option[] = this.config.genres;
  dates: Option[] = this.config.dates;
  includeAdult: Option[] = this.config.includeAdult;
  countries: Option[] = this.config.countries;

  // Number of a step in relation with an options type
  stepsConfig : { [key : number] : Option[]} = {
    1 : this.genres,
    2 : this.dates,
    3 : this.includeAdult,
    4 : this.countries,
  }

  selectorType : Option[] = this.stepsConfig[this.currentStep];

  //Id is the data that goes to a movie api
  nextStep(id : number | string[]) {
    if(this.currentStep < this.totalSteps) {
      this.currentStep += 1;
      this.selectorType = this.stepsConfig[this.currentStep];
      this.findMovie.pickingResults.push(id);
      console.log(this.findMovie.pickingResults)
    }
  }

  previousStep() {
    if(this.currentStep > 1) {
      this.currentStep -= 1;
      this.selectorType = this.stepsConfig[this.currentStep];
      this.findMovie.pickingResults.pop();
    }
  }
  ngOnInit(): void {
  }
}
