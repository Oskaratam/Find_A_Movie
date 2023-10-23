import { Injectable, Self } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfigurationService } from './configuration.service';
import { Option } from './option.interface';


@Injectable({
  providedIn: 'root',
  
})
export class AppStepsService {

  constructor(private config: ConfigurationService) { }

  currentStep : number = 1;

  genres: Option[] = this.config.genres;
  dates: Option[] = this.config.dates;



  stepsConfig : { [key : number] : Option[]} = {
    1 : this.genres,
    2 : this.dates,
  }

  selectorType : Option[] = this.stepsConfig[this.currentStep];


  nextStep(id : number | string[]) {
    this.currentStep += 1;
    this.selectorType = this.stepsConfig[this.currentStep]
    console.log(this.currentStep);
    console.log(id)
  }

  previousStep() {
    this.currentStep -= 1;
    console.log(this.currentStep);
    this.selectorType = this.stepsConfig[this.currentStep];
  }

}
