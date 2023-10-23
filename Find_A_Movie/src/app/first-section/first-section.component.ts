import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../services/configuration.service';
import { Option } from '../services/option.interface';
import { AppStepsService } from '../services/app-steps.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'fam-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstSectionComponent implements OnInit {

  constructor(public steps: AppStepsService) { };



  ngOnInit(): void {
  }

}
