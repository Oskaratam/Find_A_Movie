import { ElementRef, Injectable, QueryList } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightIndicatorsService {

  constructor() { }

  indicators !: QueryList<any>;

  currentIndicator : number = 0;

  lightIndicators() {
    this.indicators.get(this.currentIndicator).domElement.nativeElement.classList.add('active');
    this.currentIndicator += 1;
  }

  shutIndicators() {
    this.currentIndicator -= 1;
    this.indicators.get(this.currentIndicator).domElement.nativeElement.classList.remove('active');
  }
}
