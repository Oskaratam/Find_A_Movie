import { style, trigger, transition, animate } from '@angular/animations';
import { ChangeDetectionStrategy, QueryList, Self } from '@angular/core';
import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppStepsService } from 'src/app/services/app-steps.service';
import 'vanilla-tilt';
import VanillaTilt from 'vanilla-tilt';
import { StepIndicatorComponent } from '../progression-bar/step-indicator/step-indicator.component';
import { ProgressionBarComponent } from '../progression-bar/progression-bar.component';
import { LightIndicatorsService } from 'src/app/services/light-indicators.service';

const enterTransition = transition(':enter', [
  style({ width: "0%", height: "0%" }),
  animate('0.2s ease-in', style({ width: "100%", height: "100%", }))
]);


// const closeTransition = transition(':leave', [
//   style({ width: "100%", height: "100%" }),
//   animate('0.2s ease-in', style({ width: 0, height: 0 }))
// ])

const SmoothOpen = trigger('smoothOpen', [enterTransition]);
// const SmoothClosure = trigger('smoothClose', [closeTransition]);

@Component({
  selector: 'fam-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss'],
  animations: [SmoothOpen], 
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProgressionBarComponent]
})
export class OptionCardComponent implements AfterViewInit {
  @Input() optionName !: string;
  @Input() optionImage: string = '';
  @Input() optionDescription: string | undefined = '';
  @Input() optionId !: number | string[];
 
  @ViewChild('card') card !: ElementRef;

  infoIsOpened: boolean = false;

  constructor(public steps: AppStepsService, public light: LightIndicatorsService){
  }


  chooseOption() {
    this.steps.nextStep(this.optionId);
    this.light.lightIndicators();
  }



  ngAfterViewInit(): void {
    VanillaTilt.init(this.card.nativeElement, {
      max: 8,
      glare: true,
      speed: 300,
      "max-glare": 0.4
    })
  }
}
