import { ElementRef, Injectable, QueryList } from '@angular/core';
import { AppStepsService } from './app-steps.service';

@Injectable({
  providedIn: 'root'
})
export class LightIndicatorsService {

  constructor(private steps: AppStepsService) { }

  indicators !: QueryList<any>;

  currentIndicator : number = 0;

  lightIndicators() {
    if(this.currentIndicator < this.steps.totalSteps){
      this.indicators.get(this.currentIndicator).domElement.nativeElement.classList.add('active');
      this.currentIndicator += 1;
    }
    
  }

  shutIndicators() {
    if(this.currentIndicator > 0){
      this.currentIndicator -= 1;
      this.indicators.get(this.currentIndicator).domElement.nativeElement.classList.remove('active');
    }
    
  }
}
