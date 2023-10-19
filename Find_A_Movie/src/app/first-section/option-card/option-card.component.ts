import { Component, Input } from '@angular/core';

@Component({
  selector: 'fam-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent {
  @Input() optionName : string | null = null;
  @Input() optionImage : string = '';
  
}
