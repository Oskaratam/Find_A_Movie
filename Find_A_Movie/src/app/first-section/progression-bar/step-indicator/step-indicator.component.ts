import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AppStepsService } from 'src/app/services/app-steps.service';

@Component({
  selector: 'fam-step-indicator',
  templateUrl: './step-indicator.component.html',
  styleUrls: ['./step-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepIndicatorComponent implements OnInit {

  @Input() indicatorId !: number;

  @ViewChild('indicator') domElement !: ElementRef

  constructor(private steps: AppStepsService) {
  }

  ngOnInit(): void {
  }

}
