import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { AppStepsService } from 'src/app/services/app-steps.service';
import { LightIndicatorsService } from 'src/app/services/light-indicators.service';

@Component({
  selector: 'fam-progression-bar',
  templateUrl: './progression-bar.component.html',
  styleUrls: ['./progression-bar.component.scss'],
  providers: [AppStepsService]
})
export class ProgressionBarComponent implements AfterViewInit {


  constructor(public steps: AppStepsService, public light: LightIndicatorsService) {
  }
  
  arrayForRender : number[] = Array(this.steps.totalSteps);

  @ViewChildren('indicator') indicators !: QueryList<any>;

  ngAfterViewInit(): void {
    this.light.indicators = this.indicators;
  }


}

