import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ConfigurationService } from '../services/configuration.service';
import { Option } from '../services/option.interface';
import { AppStepsService } from '../services/app-steps.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProgressionBarComponent } from './progression-bar/progression-bar.component';
import { LightIndicatorsService } from '../services/light-indicators.service';

@Component({
  selector: 'fam-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ ProgressionBarComponent ]
})
export class FirstSectionComponent implements OnInit, AfterViewInit {

  constructor(public steps: AppStepsService, private light: LightIndicatorsService) { }


  @ViewChild('optionsBoard')optionsBoard !: ElementRef;

  previousStep() {
    this.steps.previousStep();
    this.light.shutIndicators();
    setTimeout(() => {const optionsBoard = this.optionsBoard;
      optionsBoard.nativeElement.classList.add('optionsOpened')
    }, 100);
  }


  ngAfterViewInit(): void {
  }




  ngOnInit(): void {
  }

}
